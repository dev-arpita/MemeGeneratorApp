import React from "react"

export default function Meme() {
    return (
        <main>
            <form className="form-section">
                <input
                    className="form--input"
                    placeholder="Type text"
                    type="text"/>
                <input
                    className="form--input"
                    placeholder="Type text"
                    type="text"/>
            <button
                className="form--btn"
                type="submit">Get a new meme image  🖼
            </button>
        </form>
    </main>

    )
}
