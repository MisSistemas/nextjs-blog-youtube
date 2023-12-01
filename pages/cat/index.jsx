import Layout from "@/components/Layout"
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

export default function index(repo) {
  return (
    <Layout
      title="Cats.. | Next.js"
       description="Listado de Gatos."
       home={false}
    >
        <h1>List of Cats</h1>
    </Layout>
  )
}
 
type Repo = {
  name: string
  stargazers_count: number
}
 
export const getServerSideProps = (async (context) => {
  const res = await fetch('http://localhost:3001/api/v1/cats')
  const repo = await res.json()
  return { props: { repo } }
}) satisfies GetServerSideProps<{
  repo: Repo
}>
 
export default function Page({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return repo.stargazers_count
}