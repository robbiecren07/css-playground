import NextImage from 'next/image'

const Image = (props) => {
  if(props.src) {
     return <NextImage {...props}/>
  }
  
  const defaultSrc = '/user-empty.png'

  return <img {...props} src={defaultSrc} />
  
}

export default Image