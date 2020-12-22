const Burguer = ({ action }) => {
  return (
    <>
      <button
        onClick={action}
      >
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
      </button>

      <style jsx>{`
        button {
          padding: 17px 12px 18px;
          background: white;
          border: 0;
          border-radius: 6px;
          height: 100%;
          cursor: pointer;
          position: relative;
          z-index: 9;
        }

        .slice {
          background: #FFD550;
          height: 4px;
          width: 100%;
          margin-top: 3px;
          width: 33px;
        }
      `}</style>
    </>
  )
}

export default Burguer