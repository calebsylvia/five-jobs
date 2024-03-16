import React from 'react'
import image from '../assets/riotgames.jpg'

const JobThree = () => {
  return (
    <div className='w-5/6 mx-auto mt-52 flex'>
      <div className='w-1/2 bg-slate-100 p-5 rounded-lg'>
        <h1 className="text-6xl mb-4 font-bold">Riot Games</h1>
        <p>Riot Games has always been a place of interest for me. I play League of Legends and Valorant so of course being able to work for this company would be a dream. Seeing the HQ and the benefits a dev can receive makes things even better. They are located in Los Angeles which I would not mind having to relocate, they also have other offices even in Australia which would be really cool.</p>
        <br/>
        <p>Riot Games uses C++ which I have no experience in whatsoever but it could be something I would want to look into in the near future. They make Valorant with Unreal Engine which I have zero experience in, I have used Unity and I am not sure how big of a difference it would be to work with but I am willing to learn.</p>
        <br/>
        <p>If I were to somehow land a job with this company I would want to help out on the Valorant side of the company. I would like to bring back double updraft on Jett because it is much needed. I would also like to remove Chamber from the game because he is not a good character anymore. I do not think I have the skill set to do work here yet but if I tried and grinded out some lessons I think I could help qualify myself.</p>
        <a className='ml-32 underline hover:text-purple-700' href='https://www.riotgames.com/en/work-with-us/job/5652130/staff-software-engineer-rendering-league-of-legends-los-angeles-usa' target='_blank'>Riot Games Staff Software Engineer</a>
      </div>
      <div className='w-1/2'>
          <img className='mt-20 ml-32' src={image} alt='Inside Riot HQ' width={500}/>
      </div>
    </div>
  )
}

export default JobThree