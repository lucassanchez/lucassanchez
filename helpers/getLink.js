const getLink = (file) => {
  const link = file.split('.')
  link.pop()

  return link.join('.')
}

export default getLink