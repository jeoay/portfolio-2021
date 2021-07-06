import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className={utilStyles.container}>
      <Head>
        <title>Joseph Pellegrino's Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" />
      </Head>

      <main>

        <h1 className="title">
          Joseph Pellegrino
        </h1>

        <p className="description">
          <code>career = 'Software Engineer'</code>
        </p>

        <div className={utilStyles.grid}>
          <Link href="/bio">
            <a className={utilStyles.card}>
              <h3>Biography &rarr;</h3>
              <p>More about the man behind the computer.</p>
            </a>
          </Link>

          <Link href="/exp">
            <a className={utilStyles.card}>
              <h3>Professional Experience &rarr;</h3>
              <p>Like a resume, but more fun.<br></br> <i>You can download my resume below.</i></p>
            </a>
          </Link>

          <Link href="/projects">
            <a className={utilStyles.card}>
              <h3>Projects &rarr;</h3>
              <p>A showcase of past work.</p>
            </a>
          </Link>

          <Link href="/contact">
            <a className={utilStyles.card}>
              <h3>Contact &rarr;</h3>
              <p>Say hello or reach out for professional inquiries.</p>
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

      <Footer />

      <style jsx>{`
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
          color: #3C3C3C;
        }

        .resume {
          float: right;
        }

        .resume a:hover {
          color: #0070f3
        }

        .bio:hover,
        .bio:focus,
        .bio:active {
          color: #33B6FF;
          border-color: #33B6FF;
        }

        .exp:hover,
        .exp:focus,
        .exp:active {
          color: #FF7C33;
          border-color: #FF7C33;
        }

        .projects:hover,
        .projects:focus,
        .projects:active {
          color: #8000DE;
          border-color: #8000DE;
        }

        .contact:hover,
        .contact:focus,
        .contact:active {
          color: #5EDE00;
          border-color: #5EDE00;
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

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}
