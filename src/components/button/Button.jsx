import React from 'react'
import './Button.css'
function Button(props) {
    const { title, link, id } = props;
  return (
    <>
        <div className="button">
                <a href={link} className='btn__link'> {title}</a>
        </div>
    </>
  )
}

export default Button