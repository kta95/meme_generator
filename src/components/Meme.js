import React from 'react'
/**
 * Challenge: 
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */
const Meme = () => {
    return (
        <main>
            <form className='form'>
                    <input type="text" placeholder='Shut up' className='form-inputs'/>
                    <input type="text" placeholder='and take my money' className='form-inputs'/>
                    <input type="submit" value="Get a new meme image 🖼" className='submit_button'/>
            </form>
        </main>
    )
}

export default Meme