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
    role: null
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

        // Supongamos que el backend devuelve un token y usuario
        this.token = response.data.token
        this.user = response.data.username
        this.message = response.data.message

        const decoded = jwtDecode(this.token)
        const authorities = JSON.parse(decoded.authorities)

        if (Array.isArray(authorities) && authorities.length > 0) {
          this.role = authorities[0].authority // por ejemplo: "ROLE_ADMIN"
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

    async logout() {
      this.user = null
      this.token = null
      this.message = null
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      localStorage.removeItem('role')
    },

    loadFromStorage() {
      this.token = localStorage.getItem('token')
      const user = localStorage.getItem('user')
       const role = localStorage.getItem('role')
      this.user = user ? JSON.parse(user) : null
    },
  },
})
