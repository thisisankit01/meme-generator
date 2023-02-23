import  navBarImage  from './assets/navBarImage.png'

export default function Header() {
  return (
    <header className='grid grid-flow-col place-content-between bg-gradient-to-r from-fuchsia-900 to-purple-600 '>
      <div className='flex flex-row py-4 pl-4'>
       <img src={navBarImage} className =""/>
       <div className='ml-6 mt-2'>
       <h3 className='font-bold text-3xl text-white sticky'>Meme Generator</h3>
       </div>
      </div>
      <h1 className='text-xl my-auto px-4 text-white'>made by <a href='https://github.com/thisisankit01' target='_blank'><strong>Ankit pandey</strong></a></h1>
    </header>
  )
}