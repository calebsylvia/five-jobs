import React from 'react'
import image from '../assets/google.webp'

const JobFour = () => {
  return (
    <div className='w-5/6 mx-auto mt-52 flex'>
      <div className='w-1/2 bg-slate-100 p-5 rounded-lg'>
        <h1 className="text-6xl mb-4 font-bold">Google</h1>
        <p>Google has been a dream of a company to work for, the benefits, pay, and amenities they provide are so good. I have watched countless videos on Google employees and they make it seem like such a great place to work at.</p>
        <br/>
        <p>Google uses a vast amount of languages and Javascript was one of them which I feel more than comfortable with, they also use Python which is something I am currently learning on the side. I don't think I am yet qualified for a position at Google in the state I am in right now but I think with enough practice I think I could do it.</p>
        <br/>
        <p>Goals to achieve in this position would simply just be getting the position itself, Google is such a big company I would not know how to make a difference on my own and do something that can help out a real problem among that field of work.</p>
        <a className='ml-32 underline hover:text-purple-700' href='https://www.linkedin.com/jobs/search/?currentJobId=3823296336&f_C=1441&f_CR=103644278&f_E=1%2C2%2C3&geoId=92000000&keywords=google&location=Worldwide&origin=JOB_SEARCH_PAGE_JOB_FILTER&refresh=true&sortBy=R' target='_blank'>Google Software Engineer Position</a>
      </div>
      <div className='w-1/2'>
          <img className='mt-20 ml-32' src={image} alt='Inside Google HQ' width={500}/>
      </div>
    </div>
  )
}

export default JobFour