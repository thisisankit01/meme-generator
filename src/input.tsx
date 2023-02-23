import React from 'react';
import html2canvas from "html2canvas";
import download from 'downloadjs';

export default function Input() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((data) => data.json())
      .then((data) => setAllMemeImages(data?.data?.memes));
    console.log(allMemeImages);
  }, []);

  function getMemeImage() {
    const memesArray: {url: string}[] = allMemeImages;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target) {
      const { name, value } = event.target;
      setMeme((prevMeme) => {
        return {
          ...prevMeme,
          [name]: value,
        };
      });
    }
  }

  async function downloadImage() {
    const container = document.getElementById("meme-container");
    if (container) {
      const canvas = await html2canvas(container, {
        useCORS: true,
      });
      const dataURL = canvas.toDataURL("image/png");
      download(dataURL, "download.png", "image/png");
    }
  }

  return (
    <main>
      <div className="form grid place-content-center">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          onChange={handleChange}
          name="topText"
          value={meme.topText}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
        />
        <button className="form--button max-sm:w-2/3" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="grid place-content-center meme container max-w-full">
        <div id="meme-container">
          <img src={meme.randomImage} className="meme--image" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>

      <div className="pt-8 grid place-content-center">
        <button
          className="form--button py-4 px-8 max-w-full"
          onClick={downloadImage}
        >
          Download meme image 📥
        </button>
      </div>
    </main>
  );
}
