import React from 'react'


const Card = ({recipe}) => {

    const {label,image} = recipe
  return (
    <aside>
        <p>{label}</p>
        <img src={image} alt={label} />
    </aside>
  )
}
export default Card