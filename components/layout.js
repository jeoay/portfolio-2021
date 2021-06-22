import Head from 'next/head'
import Image from 'next/Image'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Personal portfolio for Joseph Pellegrino"
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <h1>Welcome to my portfolio!</h1>
                    </>
                ) : (
                   <Link href="/">
                       <a>
                           <h1>Welcome Back Home!</h1>
                       </a>
                   </Link> 
                )}
            </header>
        </div>
    )
}