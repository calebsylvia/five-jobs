import React from 'react'
import image from '../assets/discord.webp'
import { Link } from 'react-router-dom'



const JobOne = () => {
  return (
    <>
    <div className='w-5/6 mx-auto mt-52 flex'>
      <div className='w-1/2 bg-slate-100 p-5 rounded-lg'>
        <h1 className="text-6xl mb-4 font-bold">Discord</h1>
        <p>The reason why I would like to work at Discord is because I have used Discord a lot growing up, I even started developing a bot for personal use although I haven't gotten that far with it. Discord is a place that I get to play games and talk to my friends almost ever night. I want to work as a developer there so I can help improve the application that I use on a day to day basis. The location of Discord's HQ is in San Francisco which isn't too far from where I am now so that is a plus. The company is pretty big so I would love to meet all the people there and see what the culture is like in person.</p>
        <br/>
        <p>Discord is build primarily with Javascript as the front-end and uses Python in the back-end. Although I don't know much about Python as of right now, it is a language I do want to learn more on so I can use that for future projects especially with the popularity of it. Javascript I do know which is a huge benefit to myself, I am not a master of Javascript but I do want to work towards achieving that.</p>
        <br/>
        <p>I think I will soon have what it takes to be qualified to work at Discord. With a little more time and practice with Javascript and soon some Python I feel confident to say I have a chance at getting a job at Discord.</p>
        <a className='ml-32 underline hover:text-purple-700 mt-3' href='https://discord.com/jobs/7260171002' target='_blank'>Discord Software Engineer Position</a>
      </div>
      <div className='w-1/2'>
          <img className='mt-20 ml-32' src={image} alt='Discord employees working together' width={500}/>
      </div>
    </div>
    </>
  )
}

export default JobOne