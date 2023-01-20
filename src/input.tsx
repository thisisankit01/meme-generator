import logo from '../public/vite.svg'

export default function Input() {
  return (
    <div className="items-center pt-14 md:flex md:flex-col md:justify-center">
      <form className="space-x-12 md:space-y-12" action="#">
      <input className="border py-2 px-8" type="text" id="name" name="name" />
      <input className="border py-2 px-8" type="text" id="name" name="name" />
      </form>
      <button className="rounded-md button mt-12  bg-gradient-to-r from-fuchsia-900 to-purple-600 font-bold text-white py-4 px-48">
      <h4>Get a new meme image 🖼️</h4>
      </button>
      <div className="container mx-auto border mt-16 h-[268px] w-[477px] mb-14">
        <img className='container mx-auto' src={logo} />
      </div>
    </div>
  )
}