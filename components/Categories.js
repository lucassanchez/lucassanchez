import { useState, useEffect } from 'react';
import Link from 'next/link'

const Avatar = ({ children }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    setCategories([
      {
        name: 'desenvolvimento de software',
        link: '#'
      },
      {
        name: 'ideias open source',
        link: '#'
      },
      {
        name: 'haikais',
        link: '#'
      },
      {
        name: 'veganismo',
        link: '#'
      },
      {
        name: 'bicicleta',
        link: '#'
      },
      {
        name: 'eventos',
        link: '#'
      }
    ])
  }, [])

  return (
    <>
      {
        categories.map(({ name, link }) => {
          return (
            <>
             <Link href={ link }>{ name }</Link>, {` `}
            </>
          )
        })
      }
    </>
  )
}

export default Avatar