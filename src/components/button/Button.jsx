import React from 'react'
import './Button.css'
function Button(props) {
    const { title, link, id } = props;
  return (
    <>
        <div className="button">
            <button>
                <a href={link}>{title}</a>
            </button>
        </div>
    </>
  )
}

export default Button