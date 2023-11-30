import Head from 'next/head';
import Layout, { siteTitle } from '@/components/Layout';
import utilStyles from  '../../styles/Utils.module.css';


export default function contacto() {
  return (
    <Layout
       title="Contacto | Next.js"
       description="Descripcion page contacto"
    >
      <h1>contacto</h1>
    </Layout>
  )
}

