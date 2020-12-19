const Card = (
  {
    title,
    link
  }
) => {
  return (
    <>
      <div className="card">
        <div className="background">
          <h3>{ title } </h3>
        </div>
        <h4>{ link }</h4>
      </div>
      <style jsx>{`
        .card {
          margin: 0px 0px 21px;
        }

        .background {
          display: flex;
          align-items: flex-end;
          height: 144px;
          background-image: linear-gradient(to bottom right, #ffd550, #ffd550);
          border-radius: 5px;
        }

        h3 {
          padding-left: 13px;
          margin-bottom: 13px;
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