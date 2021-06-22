import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Joseph Pellegrino's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <h1 className="title">
          Joseph Pellegrino
        </h1>

        <p className="description">
          <code>career = 'Software Engineer'</code>
        </p>

        <div className="grid">
          <Link href="/bio">
            <a className="card">
              <h3>Biography &rarr;</h3>
              <p>More about the man behind the computer.</p>
            </a>
          </Link>

          <Link href="/exp">
            <a className="card">
              <h3>Professional Experience &rarr;</h3>
              <p>Like a resume, but more fun.<br></br> <i>You can download my resume below.</i></p>
            </a>
          </Link>

          <Link href="/projects">
            <a className="card">
              <h3>Projects &rarr;</h3>
              <p>A showcase of past work.</p>
            </a>
          </Link>

          <Link href="/contact">
            <a className="card">
              <h3>Contact &rarr;</h3>
              <p>Say hello or reach out for professional inqueries.</p>
            </a>
          </Link>
        </div>
        <div className="resume">Download Resume &rarr;
          <Link href="/">
            <a className="d-link"> .pdf </a>
          </Link>
          ||
          <Link href="">
            <a className="d-link"> .docx</a>
          </Link>
        </div>
      </main>

      <footer>
          Powered by{' '}
        <img src="/images/coffee.png" alt="Coffee Cup" className="logo" />
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        i {
          font-size: 12px
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          color: #0070f3;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .resume {
          float: right;
        }

        .resume a:hover {
          color: #0070f3
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          height: 200px;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 2em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
