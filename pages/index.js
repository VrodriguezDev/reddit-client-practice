import Head from 'next/head';

const FULL_HEIGHT = '100vh';
const containerStyle = {
  minHeight: FULL_HEIGHT,
  padding: '0 0.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: FULL_HEIGHT
}

const mainStyle = {
  flex: 1,
  padding: '5rem 0',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}
const footerStyle = {
  width: '100%',
  height: '40px',
  borderTop: '1px solid #eaeaea',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

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
