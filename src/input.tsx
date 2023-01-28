import React from 'react'

export default function Input() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
})
const [allMemes, setAllMemes] = React.useState([])

React.useEffect(() => {
  fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data?.data?.memes))
}, [])

function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
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

function downloadImage() {
    const link = document.createElement("a");
    link.href = meme.randomImage;
    link.download = "meme.png";
    link.click();
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

        <button onClick={downloadImage}>Download Image</button>
    </main>
)
}