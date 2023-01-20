import  navBarImage  from './assets/navBarImage.png'

export default function Header() {
  return (
    <header>
      <nav className='flex flex-row bg-gradient-to-r from-fuchsia-900 to-purple-600 py-4 pl-4'>
        <div className='logo sticky'>
       <img src={navBarImage} className =""/>
       </div>
       <div className='ml-6 mt-2'>
       <h3 className='font-bold text-3xl text-white sticky'>Meme Generator</h3>
       </div>
       {/* <div className='right-navbar mt-2 items-end mt-4'>
       <h5 className='text-white font-bold underline-offset-1'>React Course - Project 3</h5>
       </div> */}
      </nav>
    </header>
  )
}