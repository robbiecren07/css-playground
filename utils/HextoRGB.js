
export default function HextoRGB(hex) {

  let r,
    g,
    b,
    a
  
  hex = hex.replace('#', '')

  if (3 === hex.length) {
    r = hex.charAt(0)
    g = hex.charAt(1)
    b = hex.charAt(2)
  } else if (6 === hex.length) {
    r = hex.substring(0, 2)
    g = hex.substring(2, 4)
    b = hex.substring(4, 6)
  } else {
    return ''
  }

  if ('undefined' === typeof a) {
    a = 'ff'
  }
  if (1 === r.length) {
    r += r
  }
  if (1 === g.length) {
    g += g
  }
  if (1 === b.length) {
    b += b
  }
  if (1 === a.length) {
    a += a
  }

  r = parseInt(r, 16)
  g = parseInt(g, 16)
  b = parseInt(b, 16)
  a = parseInt(a, 16) / 255

  const rgb = `rgb(${r}, ${g}, ${b})`
  const rgba = `rgba(${r}, ${g}, ${b}, ${a})`

  return {
    'rgb': rgb,
    'rgba': rgba
  }

}