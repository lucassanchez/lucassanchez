import Head from 'next/head'
import Header from '../../components/Header'

const Page = (
  {
    data: {
      title,
      description,
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
          <p>{ content }</p>
        </div>
      </article>
    </>
  )
}

Page.getInitialProps = async () => {
  return {
    data: {
      title: 'Comida, Não Bombas - Parte 3 - Estágio',
      description: 'Se você caiu aqui sem saber o que é um Comida Não Bombas, leia aqui primeiro:',
      content: 'Saindo do campo das ideias e pesquisas, ontem tive a honra e o prazer de fazer uma pequena participação no grupo que distribui comida que a Maíra comentou (Veja a parte 2 no link acima).'
    }
  }
}

export default Page