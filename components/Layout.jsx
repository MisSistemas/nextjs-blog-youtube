import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';
import utilStyles from '../styles/Utils.module.css';


const name = 'Productos';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, title, description,  home }) {
  return (
    <div className={styles.container}>
      <Head>

        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta
          name="description"
          content={description}
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&img=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/img/user_photo.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/" legacyBehavior>
              <Image
                priority
                src="/img/user_photo.png"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit} legacyBehavior>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <nav>
          <Link href="/">
            Inicio |
          </Link>  
          <Link href="/blog">
              Blog |

          </Link>
          <Link href="/contacto">
              Contacto |
          </Link>
          <Link href="/cat">
              Cats |
          </Link>
          <Link href="/about">
            About
          </Link>
      </nav>  

      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}