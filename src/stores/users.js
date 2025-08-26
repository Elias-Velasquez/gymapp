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
    role: null,
    selectedUser: null
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
        this.user = (response.data || []).map(u => {
          let status = ''
          if (u.deleted) {
            status = 'Baja'
          } else if (!u.deleted && u.enabled) {
            status = 'Alta'
          } else {
            status = 'Pendiente'
          }
          return { ...u, status }
        })

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
    async editProfile(username, formData){
      this.loading = true
        this.error = null
        this.message = null
  
        const token = localStorage.getItem('token')

        try {

          const response = await axios.put(
            `http://69.62.111.126:8080/api/users/${username}`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
              }
            }
          )
  
          this.message = 'Perfil actualizado correctamente'
          return response.data
        } catch (err) {
          console.error(err)
          if (err.response && err.response.data) {
            this.error = err.response.data.message || 'Error en la actualización'
          } else {
            this.error = 'No se pudo conectar con el servidor'
          }
          throw err
        } finally {
          this.loading = false
        }
      
    },
    async deleteUser(username) {
      try {
        const token = localStorage.getItem('token')
        await axios.delete(`http://69.62.111.126:8080/api/users/${username}`,
          {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
        );
        // refrescar la lista después de borrar
        await this.getUsers();
        return true;
      } catch (err) {
        console.error("Error al eliminar usuario", err);
        return false;
      }
    }
  },
})
