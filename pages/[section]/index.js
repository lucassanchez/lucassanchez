import Head from 'next/head'
import Header from '../../components/Header'
import Card from '../../components/Card'
import getList from '../../helpers/getList'
import getColors from '../../helpers/getColors'

const Page = (
  {
    data,
    section
  }
) => {

  return (
    <>
      <Head>
        <title>{section} ~ Lucas Inocente</title>
      </Head>
      <Header />
      <article>
        <h1>/{section}</h1>
        <div className="inner-container">
          { data.map(({ link, title }, index ) => {
            return <Card link={link} title={title} />
          })}
        </div>
      </article>
    </>
  )
}

export async function getServerSideProps({ query: { section }, resolvedUrl }) {
  const data = getList(resolvedUrl)

  return {
    props: { 
      section,
      data: [
        ...data,
      ]
    }
  }
}

export default Page