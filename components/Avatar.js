import Image from 'next/image'

const Avatar = ({ 
  width = 80,
  height = 80,
  backgroundColor
}) => {
  return (
    <>
      <Image
        src="/lucas-inocente.jpg"
        alt="Lucas Inocente"
        width={width}
        height={height}
        quality={100}
      />
    </>
  )
}

export default Avatar