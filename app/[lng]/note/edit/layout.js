import { auth, signIn } from '@/auth'

export default async function RootLayout({ children }) {
  const session = await auth()
  if (!session?.user) {
    console.log('Not signIn')
    await signIn()
  }

  return (
    <div>{children}</div >
  )
}
