// src/stores/auth.ts
import { defineStore } from 'pinia'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'


export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    loading: false,
    error: null,
    message: null,
    role: null,
    userData: null,
  }),
  actions: {
    async login(username, password) {
      this.loading = true
      this.error = null
      this.message = null
      try {
        const response = await axios.post('http://69.62.111.126:8080/login', {
          username,
          password,
        })
        console.log('re', response)
        // Supongamos que el backend devuelve un token y usuario
        this.token = response.data.token
        this.user = response.data.username
        this.message = response.data.message
        await this.getUserData(this.user, this.token)

        const decoded = jwtDecode(this.token)
        let authorities = []
        console.log('decoded', decoded)
        try {
          authorities = JSON.parse(decoded.authorities)
        } catch (e) {
          authorities = []
        }

        if (Array.isArray(authorities) && authorities.length > 0) {
          this.role = authorities[0].authority
        } else {
          this.role = 'ROLE_USER' // 🔥 fallback si no tiene authorities
        }

        // Guardamos en localStorage (opcional)
        localStorage.setItem('token', this.token)
        localStorage.setItem('user', JSON.stringify(this.user))
        localStorage.setItem('role', this.role)

      } catch (err) {
        console.log(err)
        // Detectar mensaje de error del backend o por red
        if (err.response && err.response.data) {
          this.error = err.response.data.message || 'Error en la solicitud'
        } else {
          this.error = 'No se pudo conectar con el servidor'
        }
        setTimeout(() => {
         this.error = null;
        }, 5000);
      } finally {
        this.loading = false
      }
    },
    async loginToRegister(username, password) {
      try {
        const response = await axios.post('http://69.62.111.126:8080/login', {
          username,
          password,
        })

        // Supongamos que el backend devuelve un token y usuario
        this.token = response.data.token
        return this.token
      } catch (err) {
        console.log(err)
      } finally {

      }
    },

    async logout() {
      this.user = null
      this.token = null
      this.message = null
      this.userData = null
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      localStorage.removeItem('role')
      localStorage.removeItem('userData')
    },
    async getUserData(email, token) {
      this.loading = true
      this.error = null
      this.message = null
      try {
        
        const response = await axios.get(`http://69.62.111.126:8080/api/users/${email}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        console.log('response', response)
         let roles = response.data.roles
          if (!Array.isArray(roles) || roles.length === 0) {
            roles = [{ id: 2, name: 'ROLE_USER' }]
          }

          this.userData = {
            ...response.data,
            roles
          }
        localStorage.setItem('userData', JSON.stringify(this.userData))
        } catch(err) {
          console.log('error1', err)
          this.userData = null
          if (err.response && err.response.data) {
            this.error = err.response.data.message || 'Error en la solicitud'
          } else {
            this.error = 'No se pudo conectar con el servidor'
          }
          setTimeout(() => {
           this.error = null;
          }, 5000);
        }

    },

    loadFromStorage() {
      this.token = localStorage.getItem('token')
      const user = localStorage.getItem('user')
       const role = localStorage.getItem('role')
      this.user = user ? JSON.parse(user) : null

      if (this.user && this.token) {
        this.getUserData(this.user, this.token) // 🔥 vuelve a cargar los datos
      }
    },
    async register(user, imageFile) {
      try {
        const formData = new FormData()

        // userJson como string
        formData.append("userJson", JSON.stringify(user))

        // imagen como file
        formData.append("imagen", imageFile)
        console.log('formData1', formData.get('userJson'))
        let token = await this.loginToRegister('email@email.com', '1234')

        const { data } = await axios.post("http://69.62.111.126:8080/api/users/register", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`
          }
        })

        return data
      } catch (error) {
        console.error("Error en register:", error)
        throw error
      }
    }
  },
})
