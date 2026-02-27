export interface Project {
  id: string
  name: string
  created_by: string
  environments: any[]
  members: {
    id: string
    project_id: string
    user_id: string
    role: string
    created_at: string
    updated_at: string
  }
  created_at: string
  updated_at: string
}
