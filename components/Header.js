import { useState } from 'react'
import Link from 'next/link'
import Avatar from './Avatar'
import Burguer from './Burguer'

const Header = () => {
  const [showMenu, setShowMenu] = useState();

  return (
    <>
      <div className="header">
        <Link href="/">
          <Avatar />
        </Link>
        <nav>
          <Burguer
            action={() => setShowMenu(!showMenu)}
            showsCloseButton={showMenu}
          />
          <ul className={`links ${showMenu ? 'active' : ''}`}>
            <li>
              <Link href="#">
                Sobre mim
              </Link>
            </li>
            <li>
              <Link href="#">
                Projetos
              </Link>
            </li>
            <li>
              <Link href="#">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .links.active {
          display: flex;
        }

        .links {
          display: none;
          flex-direction: column;
          position: fixed;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100vh;
          z-index: 8;
          background: white;
          margin: 0;
          padding: 0;
        }

        .links li {
          height: 21vh;
        }

        .links li :global(a) {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
          font-size: 34px;
        }

        .links li :global(a:hover) {
          background: #FFD550;
        }
      `}</style>
    </>
  )
}

export default Header