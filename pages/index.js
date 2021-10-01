import Head from 'next/head';
import { containerStyle, mainStyle, footerStyle } from '../styles/semanticStyles'

export default function Home() {
  return (
    <div style={containerStyle}>
      <Head>
        <title>Reddit Client Practice</title>
        <meta name="description" content="Reddit Client Practice" />
      </Head>

      <main style={mainStyle}>
        Reddit Client Practice
      </main>

      <footer style={footerStyle}>
        <a
          href="https://github.com/VrodriguezDev"
          target="_blank"
          rel="noopener noreferrer"
        >
          By Vicente Rodriguez
        </a>
      </footer>
    </div>
  )
}
