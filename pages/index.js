import Head from 'next/head'
import Link from 'next/link'
import Avatar from '../components/Avatar'
import Categories from '../components/Categories'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucas Inocente - Comunicação, simplicidade, feedback, coragem e respeito.</title>
      </Head>

      <main>
        <div className="section">
          <div className="avatar">
            <Avatar
              width={233}
              height={233}
            />
          </div>
          <h1>
            <span>Oi, 👋 </span>
            <span>eu sou o </span>
            <span>Lucas Inocente</span>
          </h1>
        </div>
        <div className="section">
          <p>
            Aqui tu podes saber {` `}
            <Link href="/paginas/sobre">sobre mim</Link>,{` `}
             ver as lives e verbetes que produzi para o livro{` `}
            <Link href="/dvap">Da Visão à Produção</Link> e
            ler os textos que escrevo para o{` `}
            <Link href="/blog">blog</Link>.</p>
        </div>
      </main>

      <style jsx>{`
        main {
          padding: 55px;
          max-width: 987px;
          margin: 0 auto;
        }

        .section {
          display: flex;
          align-items: center;
        }

        .avatar {
          margin-right: 55px;
          display: flex;
          justify-content: center;
        }

        h1 span {
          display: block;
        }

        p {
          font-size: 21px;
          line-height: 1.8;
          width: 100%;
          word-break: break-word;
          font-weight: 600; // 610
        }

        @media (max-width: 610px) {
          .avatar {
            margin-right: 0px;
            text-align: center;
          }
          h1 span {
            display: inline;
          }
          main {
            padding: 34px;
          }
          .section {
            display: block;
          }
        }
      `}</style>
    </>
  )
}
