import { useQuery } from '@tanstack/react-query'
import { ProjectService } from '../service'
import type { ProjectResponseDTO } from '../types/dto'

export const useProjectsQuery = () => {
  return useQuery<ProjectResponseDTO>({
    queryKey: ['projects'],
    queryFn: ProjectService.getProjects,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 5,
    placeholderData: (prev) => prev,
  })
}
