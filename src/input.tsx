import React from 'react'
import logo from '../public/vite.svg'
import memesData from './memePage'

export default function Input() {

  const [memeImage,setMemeImage] = React.useState("")

   function getMemeImage(){
    const memesArray = memesData.data.memes
    const randomImage = Math.floor(Math.floor(Math.random() * memesArray.length))
    const url = memesArray[randomImage].url
    setMemeImage(url)
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
        <img className='container mx-auto' src={memeImage}/>
      </div>
    </div>
  )
}