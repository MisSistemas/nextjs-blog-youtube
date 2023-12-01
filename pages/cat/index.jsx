import Layout from '../../components/Layout'
import Link from 'next/link'

export default function index({ data }) {
  return (
    <Layout>
        <h1>Lista de Gatos</h1>
        { data.map(({ id, name, age, breed, deletedAt }) => (
            <div key={id}>
                <h3>
                    <Link legacyBehavior href={`/blog/${id}`}>
                        <a>{id} - {name} - {age} - {breed} - {deletedAt} </a>
                    </Link>
                </h3>
            </div>
        ))}
    </Layout>
  )
}

export async function getStaticProps() {
    try {
        const res =  await fetch('http://localhost:3001/api/v1/cats/')
        const data = await res.json()
        return {
            props: {
                data
            }
        }
    } catch (error) {
        console.log(error)
    }
}