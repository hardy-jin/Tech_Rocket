<script lang="ts">
import axios from 'axios'
const apiClient = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getCourses() {
    return apiClient.get('/course/all')
  },
}
</script>