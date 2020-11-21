import Image from 'next/image'

const Avatar = ({ 
  width = 100,
  height = 100
}) => {
  return (
    <Image
      src="/lucas-inocente.jpg"
      alt="Lucas Inocente"
      width={width}
      height={height}
      quality={100}
    />
  )
}

export default Avatar