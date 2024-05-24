import { redirect } from "next/navigation"

export default async function Home() {
  redirect('/products')

  return <main></main>
}
