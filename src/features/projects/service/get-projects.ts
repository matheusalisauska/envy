import { api } from '@/lib/api'

export async function getProjects() {
  const response = await api.get('/v1/projects')
  return response.data
}
