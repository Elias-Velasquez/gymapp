// src/stores/auth.ts
import { defineStore } from 'pinia'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'


export const useUserStore = defineStore('user', {
  state: () => ({
    user: [],
    token: null,
    loading: false,
    error: null,
    message: null,
    role: null
  }),
  actions: {
    async getUsers() {
      this.loading = true
      this.error = null
      this.message = null

      const token = localStorage.getItem('token')

      try {
        const response = await axios.get('http://69.62.111.126:8080/api/users', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        console.log('us', response)
        this.user = response.data || [] 

      } catch (err) {
        console.log(err)
        // Detectar mensaje de error del backend o por red
        if (err.response && err.response.data) {
          this.user = []
          this.error = err.response.data.message || 'Error en la solicitud'
        } else {
            this.user = []
          this.error = 'No se pudo conectar con el servidor'
        }

      } finally {
        this.loading = false
      }
    },
  },
})
