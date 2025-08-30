import React from 'react'

type NavbuttonProp = {
    text:string,
}
const Navbutton = ({text}:NavbuttonProp) => {
  return (
    <div>
      {text}
    </div>
  )
}

export default Navbutton
