import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'
import Header from '../../components/Header'
import getPage from '../../helpers/getPage'
import getList from '../../helpers/getList'
import getAllContent from '../../helpers/getAllContent'

const Page = (
  {
    section,
    id,
    data: {
      data: {
        title,
        subtitle,
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
      <div className="background">
        <Header section={section} id={id} />
        <div className="hero inner-container">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
      </div>
      <article>
        <div className="inner-container">
          { ReactHtmlParser(content) }
        </div>
      </article>
      <style jsx>{`
        .background {
          background: #FFD550;
        }
        h1, h2 {
          font-weight: normal;
        }
        .hero {
          padding: 89px 13px 144px;
        }
      `}</style>
    </>
  )
}

export async function getStaticPaths() {
  const contents = getAllContent()
  const paths = contents.map(({ params: { section } }) => {
    const list = getList(section)

    return list.map(({ link }) => {
      return {
        params: {
          section,
          id: link
        }
      }
    })
  })

  return {
    paths: paths.flat(),
    fallback: false,
  };
}


export async function getStaticProps(
  {
    params: {
      section,
      id
    }
  }
){
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