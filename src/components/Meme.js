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
        <main className="main">
            <form >
                <div className='inputs_'>
                    <input type="text" placeholder='Shut up' className='from--input1'/>
                    <input type="text" placeholder='and take my money' />
                </div>
                <br />
                <div className='submit_button'>
                    <input type="submit" value="Get a new meme image 🖼" />
                </div>
            </form>
        </main>
    )
}

export default Meme