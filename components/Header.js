import { useState } from 'react'
import Link from 'next/link'
import Avatar from './Avatar'
import Burguer from './Burguer'

const Header = ({ section, id }) => {
  const [showMenu, setShowMenu] = useState();

  const handleMenu = () => setShowMenu(!showMenu)

  return (
    <>
      <div className="header">
        <div className="avatar">
          <Link href="/">
            <a title="Lucas Inocente - Home">
              <Avatar />
            </a>
          </Link>
          <div className="title">
            <Link href={`/${section}`}>
              <a title={section}>/{section}</a>
            </Link>
            <span>{id ? `/${id}` : ''}</span>
          </div>
        </div>
        <nav>
          <Burguer
            action={handleMenu}
            showsCloseButton={showMenu}
          />
          <ul
            onClick={handleMenu}
            className={`links ${showMenu ? 'active' : ''}`}
          >
            <li>
              <Link href="/paginas/sobre">
                Sobre mim
              </Link>
            </li>
            <li>
              <Link href="/paginas/projetos">
                Projetos
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <style jsx>{`
        .title {
          font-weight: bold;
          font-size: 21px;
          padding-left: 13px;
        }

        .avatar {
          display: flex;
          align-items: center;
        }

        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
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
          padding: 20vh 0 0;
        }

        .links li {
          height: 20vh;
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

        @media (max-width: 610px) {
          .title {
            font-size: 13px;
          }
        }
      `}</style>
    </>
  )
}

export default Header