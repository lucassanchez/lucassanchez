const colors = [
  {
    from: 'ffd550',
    to: 'ffd550'
  },
  {
    from: 'bdc743',
    to: 'bdc743'
  },
  {
    from: '7cb646',
    to: '7cb646'
  },
  {
    from: '30a150',
    to: '30a150'
  },
  {
    from: '008a5b',
    to: '008a5b'
  },
  {
    from: '007263',
    to: '007263'
  }
]

const getColors = () => {
  const ramdom = Math.floor(Math.random() * colors.length)
  const { from, to } = `#${colors[ramdom]}`

  return [
    {
      from,
      to
    }
  ]
}

export default getColors