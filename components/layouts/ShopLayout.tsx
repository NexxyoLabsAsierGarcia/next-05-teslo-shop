import { FC } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui';

interface Props {
    children: JSX.Element;
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
}

export const ShopLayout: FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
  return (
    <>
        <Head>
            <title>{ title }</title>
            <meta name='description' content={ pageDescription } />
            <meta name='og:title' content={ title } />
            <meta name='og:description' content={ pageDescription } />

            {
                imageFullUrl && (
                    <meta name='og:image' content={ imageFullUrl } />
                )
            }
        </Head>

        <nav>
            <Navbar />
        </nav>

        {/* TODO: Sidebar */}

        <main style={{
            margin: '80px auto',
            maxWidth: '1440px',
            padding: '0px 30px'
        }}>
            { children }
        </main>

        <footer>
            {/* TODO: Footer */}
        </footer>
    </>
  )
}
