import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
    const [ memeImage, setImg] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setImg( memesArray[randomNumber].url)
        return memeImage
    }



    return (
        <main>
            <div className="form">
                <label htmlFor="top-text">Top Text</label>
                <input
                    id="top-text"
                    type="text"
                    placeholder="Shut up"
                    className="form--input"
                />
                <label htmlFor="bottom-text">Bottom Text</label>
                <input
                    id="bottom-text"
                    type="text"
                    placeholder="and take my money"
                    className="form--input"
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}>
                    Get a new meme image 🖼
                </button>
            </div>
            <img className="meme-img" src={memeImage}/>
        </main>
    )
}
