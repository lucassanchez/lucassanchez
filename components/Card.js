import Link from 'next/link'

const Card = (
  {
    section,
    title,
    link,
    href
  }
) => {
  const goToLink = href ? href : `/${section}/${link}`

  return (
    <>
      <div className="card">
        <Link href={goToLink}>
          <a title={ title }>
            <div className="background">
              <h3>{ title }</h3>
            </div>
            <h4>{ link }</h4>
          </a>
        </Link>
      </div>
      <style jsx>{`
        .card {
          margin: 0px 0px 21px;
        }

        .background {
          display: flex;
          align-items: flex-end;
          min-height: 144px;
          padding: 13px;
          background-image: linear-gradient(to bottom right, #ffd550, #ffd550);
          border-radius: 5px;
        }

        h3 {
          margin: 0px;
          font-size: 34px;
          font-weight: normal;
        }

        h4 {
          margin: 0px;
          padding-left: 13px;
        }
      `}</style>
    </>
  )
}

export default Card