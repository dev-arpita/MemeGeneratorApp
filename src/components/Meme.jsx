import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
    let url
        const memesArray = memesData.data.memes
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
        console.log(url)
    }
const renderMemeImg = memesArray.map( img => <img src={img.url}/>)

 console.log(renderMemeImg)
    return (
        <main>
            <p>{url}</p>
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
                {renderMemeImg}
            </div>
        </main>
    )
}
