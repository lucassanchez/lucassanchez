import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'
import Header from '../../components/Header'
import getPage from '../../helpers/getPage'

const Page = (
  {
    data: {
      data: {
        title,
        description,
      },
      content
    }
  }
) => {
  return (
    <>
      <Head>
        <title>{title} ~ Lucas Inocente</title>
      </Head>
      <Header />
      <article>
        <h1>{title}</h1>
        <div className="inner-container">
          <h2>{description}</h2>
          { ReactHtmlParser(content) }
        </div>
      </article>
    </>
  )
}

export async function getServerSideProps({ resolvedUrl }) {
  const data = getPage(resolvedUrl)
  console.log(data)

  return {
    props: { data }
  }
}

export default Page