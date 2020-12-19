import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'
import Header from '../../components/Header'
import getPage from '../../helpers/getPage'

const Page = (
  {
    section,
    id,
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
      <Header section={section} id={id} />
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

export async function getServerSideProps({ query: { section, id },  }) {
  const path = `${section}/${id}`
  const data = getPage(path)

  return {
    props: { 
      section,
      id,
      data
    }
  }
}

export default Page