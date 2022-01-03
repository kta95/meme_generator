import React from 'react'
import trollface from '../images/troll-face.png'

const Header = () => {
    return (
        <header className='header'>
            <div className='logo-title'>
                <img src={trollface} alt="troll face logo" />
                <p>Meme Generator</p>
            </div>
            <p className='course_'>React Course - Project</p>
        </header>
    )
}

export default Header