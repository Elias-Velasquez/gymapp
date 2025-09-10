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

        // Supongamos que el backend devuelve un token y usuario
        this.token = response.data.token
        this.user = response.data.username
        this.message = response.data.message
        await this.getUserData(this.user, this.token)

        const decoded = jwtDecode(this.token)
        let authorities = []

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

    async loadFromStorage() {
      this.token = localStorage.getItem('token')
      const user = localStorage.getItem('user')
       const role = localStorage.getItem('role')
      this.user = user ? JSON.parse(user) : null
      this.role = role || null

      if (this.user && this.token) {
        await this.getUserData(this.user, this.token) // 🔥 vuelve a cargar los datos
      }
    },
    async register(formData) {
    try {
        // DEBUG: Verificar token antes de enviar
        let token = localStorage.getItem('token') || this.token;

        if (!token) {
            console.error('❌ No hay token disponible');
            throw new Error('No hay token de autenticación disponible');
        }

        // Verificar si el token está expirado
        try {
            const decoded = jwtDecode(token);
            const currentTime = Date.now() / 1000;
 
            if (decoded.exp < currentTime) {
                console.error('❌ Token expirado');
                await this.logout();
                throw new Error('Token expirado - por favor inicia sesión nuevamente');
            }
        } catch (decodeError) {
            console.error('❌ Error al decodificar token:', decodeError);
            await this.logout();
            throw new Error('Token inválido - por favor inicia sesión nuevamente');
        }

        const { data } = await axios.post("http://69.62.111.126:8080/api/users/register", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            }
        });

        return data;

    } catch (error) {
        console.error("❌ Error en register:", error);
        
        // Manejo específico de errores de autenticación
        if (error.response?.status === 403) {
            console.error('❌ Error 403 - Token rechazado por el servidor');
            await this.logout(); // Limpiar estado inválido
            throw new Error('Sesión expirada - por favor inicia sesión nuevamente');
        } else if (error.response?.status === 401) {
            console.error('❌ Error 401 - No autorizado');
            await this.logout();
            throw new Error('No autorizado - por favor inicia sesión nuevamente');
        }
        
        throw error;
    }
}
  },
  getters: {
    isAuthenticated: (state) => {
        const hasToken = !!state.token || !!localStorage.getItem('token');
        const hasUser = !!state.user;
        return hasToken && hasUser;
    },
    
    getValidToken: (state) => {
        const token = state.token || localStorage.getItem('token');
        if (!token) return null;
        
        try {
            const decoded = jwtDecode(token);
            const currentTime = Date.now() / 1000;
            
            if (decoded.exp < currentTime) {
                console.warn('Token expirado');
                return null;
            }
            
            return token;
        } catch (error) {
            console.error('Token inválido:', error);
            return null;
        }
    }
},
  persist: true
})
