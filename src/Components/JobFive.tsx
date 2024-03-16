import React from 'react'
import image from '../assets/freelance.jpg'

const JobFive = () => {
  return (
    <div className='w-5/6 mx-auto mt-52 flex'>
      <div className='w-1/2 bg-slate-100 p-5 rounded-lg'>
        <h1 className="text-6xl mb-4 font-bold">Freelancer</h1>
        <p>Being a freelance has so many benefits from being able to work on your own time to being able to work anywhere you would like to. A freelance career is one I have considered in the past because I know I like to work on my own time sometimes but I also know freelancing can be really rough in the beginning which strayed me away from it. Freelance development doesn't really have requirements, the freedom is for the developer to decide what they want to use.</p>
        <br/>
        <p>If I do end up following the route of being a freelancer I think I would like to help smaller businesses by building out websites to help bring more traffic to their company allowing for more success within their business. I would like to just be able to help out other people in an effective and meaningful manner.</p>
      </div>
      <div className='w-1/2'>
          <img className='mt-20 ml-32' src={image} alt='Discord employees working together' width={500}/>
      </div>
    </div>
  )
}

export default JobFive