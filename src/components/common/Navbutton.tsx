import React from 'react'

type NavbuttonProp = {
    text:string,
}
const Navbutton = ({text}:NavbuttonProp) => {
  return (
    <button>
      {text}
    </button>
  )
}

export default Navbutton
