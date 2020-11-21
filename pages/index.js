import Head from 'next/head'
import Link from 'next/link'
import Avatar from '../components/Avatar'
import Categories from '../components/Categories'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucas Inocente - Comunicação, simplicidade, feedback, coragem e respeito.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="section">
          <div className="avatar">
            <Avatar
              width={280}
              height={280}
              quality={100}
            />
          </div>
          <h1>
            <span>Oi 👋 </span>
            <span>eu sou o </span>
            <span>Lucas Inocente</span>
          </h1>
        </div>
        <div className="section">
          <p>
             Aqui tu podes {` `}
            <Link href="#">falar comigo</Link>,{` `}
            saber mais {` `}
            <Link href="#">sobre mim</Link>,{` `}
            ver {` `}
            <Link href="#">fotos</Link>{` `}
            que eu tiro, {` `}
            <Link href="#">textos</Link>{` `}
            que eu escrevo sobre {` `}
            <Categories />
            e {` `}
            <Link href="#">todo o resto...</Link>
          </p>
        </div>
      </main>

      <style jsx>{`
        main {
          padding: 60px;
          max-width: 1480px;
        }

        .section {
          display: flex;
          align-items: center;
        }

        .avatar {
          margin-right: 60px;
        }

        h1 span {
          display: block;
        }

        p {
          font-size: 32px;
          line-height: 1.6;
          width: 100%;
          word-break: break-word;
        }

        @media (max-width: 560px) {
          main {
            padding: 36px;
          }

          .section {
            display: block;
          }

          p {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  )
}
