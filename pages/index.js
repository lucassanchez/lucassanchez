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
          padding: 55px;
        }

        .section {
          display: flex;
          align-items: center;
        }

        .avatar {
          margin-right: 55px;
        }

        h1 span {
          display: block;
        }

        p {
          font-size: 34px;
          line-height: 1.8;
          width: 100%;
          word-break: break-word;
          font-weight: 600; // 610
        }

        @media (max-width: 610px) {
          main {
            padding: 34px;
          }

          .section {
            display: block;
          }

          p {
            font-size: 21px;
          }
        }
      `}</style>
    </>
  )
}
