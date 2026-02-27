import type { Project } from './models'

export interface ProjectResponseDTO {
  data: Project[]
  message: string
}
