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
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
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
