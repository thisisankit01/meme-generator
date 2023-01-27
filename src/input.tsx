import React from 'react'

export default function Input() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
})
const [allMemeImages, setAllMemeImages] = React.useState([])
    
React.useEffect(async () => {
  const res = await fetch("https://api.imgflip.com/get_memes")
  const data = await res.json()
  setAllMemeImages(data.data.memes)
}, [])


function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length)
    const url = allMemeImages[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
    
}

function handleChange(event : any) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
}

return (
    <main>
        <div className="form">
            <input 
                type="text"
                placeholder="Top text"
                className="form--input"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
            />
            <input 
                type="text"
                placeholder="Bottom text"
                className="form--input"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
            />
            <button 
                className="form--button"
                onClick={getMemeImage}
            >
                Get a new meme image 🖼
            </button>
        </div>
        <div className="meme container mx-auto">
            <img src={meme.randomImage} className="meme--image container mx-auto" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    </main>
)
}