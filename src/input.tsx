import React from 'react'
import logo from '../public/vite.svg'
import memesData from './memePage'

export default function Input() {

   /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */
    

 // const [memeImage,setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")

 const [meme,setMeme] = React.useState({
  topText : "",
  bottomText: "",
  randomImage: "http://i.imgflip.com/1bij.jpg"
 })

 const [allMemeImages,setAllMemeImages] = React.useState(memesData)

   function getMemeImage(){
    const memesArray = memesData.data.memes
    const randomImage = Math.floor(Math.floor(Math.random() * memesArray.length))
    const url = memesArray[randomImage].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
   }


  return (
    <div className="items-center pt-14 md:flex md:flex-col md:justify-center">
      <form className="space-x-12 md:space-y-12" action="#">
      <input className="border py-2 px-8" type="text" id="name" name="name" placeholder='Top Text'/>
      <input className="border py-2 px-8" type="text" id="name" name="name" placeholder='Bottom Text'/>
      </form>
      <button onClick={getMemeImage} className="rounded-md button mt-12  bg-gradient-to-r from-fuchsia-900 to-purple-600 font-bold text-white py-4 px-48">
      <h4>Get a new meme image 🖼️</h4>
      </button>
      <div className="container mx-auto border mt-16 max-h-[268px] max-w-[477px] mb-14">
        <img className='container mx-auto' src={meme.randomImage}/>
      </div>
    </div>
  )
}