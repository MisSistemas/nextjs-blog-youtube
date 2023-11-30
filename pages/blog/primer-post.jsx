import Link from "next/link"
import Image from "next/image"
import Layout from "@/components/Layout"
import utilStyle from '../../styles/Utils.module.css'

export default function primerPost() {
  return (
    <Layout>
        <h1>primer-post</h1>

        <Image
        src="/img/1.jpg"
        width={600}
        height={600}
        alt="Imagen cargada con image "
        ></Image>
        
        <Link href="/">
          Volver al inicio
       </Link>
      
    </Layout>
    
  )
}
