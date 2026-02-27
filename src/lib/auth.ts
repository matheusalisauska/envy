import { getUser } from '@/features/user/services/get-user'
import { redirect } from '@tanstack/react-router'
import { createMiddleware } from '@tanstack/react-start'

export async function isAuthenticated() {
  const res = await getUser()

  if (!res.token) return false

  return res
}

export const authenticatedMiddlware = createMiddleware({
  type: 'request',
}).server(async ({ next }) => {
  const auth = await isAuthenticated()

  if (!auth) {
    throw redirect({ to: '/login' })
  }

  return next({
    context: {
      auth,
    },
  })
})
