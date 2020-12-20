import Head from 'next/head'
import Header from '../../components/Header'
import Card from '../../components/Card'
import getList from '../../helpers/getList'

const Page = (
  {
    data,
    lives,
    section
  }
) => {
  return (
    <>
      <Head>
        <title>{section} ~ Lucas Inocente</title>
      </Head>

      <div className="background">
        <Header section={section} />
        <div className="hero inner-container">
          <h1>Da Visão à Produção</h1>
          <p>O Da Visão à Produção é um livro escrito em parceria com o meu amigo <a href="https://danielwildt.com">Daniel Wildt</a> e que documenta nossas práticas, técnicas e experiências para ajudar quem busca tirar suas ideias do papel. Em formato de texto e <i>live streams</i>.</p>
          <p><strong>Sobre o livro:</strong> para algo dar errado, é preciso dar um passo. E para dar certo, também! Tudo que fazemos na nossa vida tem um resultado e um aprendizado. Projetos podem iniciar como um hobby, como diversão, mas como sistematizar o trabalho de avaliação e evolução de um projeto, que pode se tornar sua próxima empresa? Ou pelo menos que seja uma atividade que não consuma recursos de tempo e dinheiro em excesso?</p>
          <p>Adquira o seu em: <a href="https://leanpub.com/dvap">https://leanpub.com/dvap</a></p>
        </div>
      </div>
      <article className="inner-container">
        <h2>Live streams:</h2>
        <div>
          { lives.map(({ link, title, section }) => (
              <Card
                title={title}
                section={section}
                link={section}
                href={link}
              />
            ))
          }
        </div>
        <h2>Verbetes:</h2>
        <div>
          { data.map(({ link, title }) => (
              <Card
                link={link}
                title={title}
                section={section}
              />
            ))
          }
        </div>
      </article>

      <style jsx>{`
        .background {
          background: #E9EB9E;
        }
        h1 {
          margin-top: 0;
        }
        h1, h2 {
          font-weight: normal;
        }
        .hero {
          padding: 55px 13px 89px;
        }
      `}</style>
    </>
  )
}

export async function getServerSideProps() {
  const section = 'dvap'
  const data = getList(section, 'contents', true)
  const lives = [
    {
      title: 'Experiência e Sucesso do Cliente',
      section: 'c/ Karen Oswald e Daniel Wildt',
      link: 'https://youtu.be/z1ouBxNje6g'
    },
    {
      title: 'OKRs - Objetivos e Resultados Chaves',
      section: 'c/ Thomaz Ribas e Daniel Wildt',
      link: 'https://youtu.be/92r0DyJ8Q2o'
    },
    {
      title: 'POX - Educação e Modelo de Negócios',
      section: 'c/ Edson Matsuo, Fausto Vanin e Daniel Wildt',
      link: 'https://youtu.be/2HSgptSKWjM'
    },
    {
      title: 'Seasoned - Arte, Crowdfunding e Segmento de Clientes',
      section: 'c/ Daniel Weinmann e Daniel Wildt',
      link: 'https://youtu.be/HBd-XMgelJw'
    },
    {
      title: 'Emprego x Trabalhabilidade',
      section: 'c/ Daniel Wildt',
      link: 'https://youtu.be/8cX92zkhiug'
    },
    {
      title: 'Paciência, estômago e quem é você?',
      section: 'c/ Daniel Wildt',
      link: 'https://youtu.be/8gWhxbQ0inc'
    },
  ]

  return {
    props: { 
      section,
      lives,
      data: [
        ...data,
      ]
    }
  }
}

export default Page