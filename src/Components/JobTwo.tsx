import React from 'react'
import image from '../assets/gitstart.jpg'

const JobTwo = () => {
  return (
    <div className='w-5/6 mx-auto mt-52 flex'>
      <div className='w-1/2 bg-slate-100 p-5 rounded-lg'>
        <h1 className="text-6xl mb-4 font-bold">GitStart</h1>
        <p>I had ran into GitStart at Developer Week and I was instantly hooked on the idea of becoming a possible intern there. They had mentioned how they take trips to other countries as a team and that being a part of the team dynamic meant a lot. They seemed to have great energy and had great flexibility with where people worked, after further research I had seen that they have developers all over the globe which is so cool.</p>
        <br/>
        <p>The stack they use is all dependent on the customer, a customer can submit a ticket for something of front or back end. I am confident in my front end abilities so I can say I am decently qualified for something of this position.</p>
        <br/>
        <p>I believe with the knowledge I have as of right now I can be a part of this team, most likely as an intern to start off but eventually I will develop the skills to take my knowledge even further.</p>
        <a className='ml-32 underline hover:text-purple-700 mt-3' href='https://www.linkedin.com/company/gitstarthq/jobs/' target='_blank'>GitStart Developer Application</a>
      </div>
      <div className='w-1/2'>
          <img className='mt-20 ml-32' src={image} alt='GitStart Team' width={500}/>
      </div>
    </div>
  )
}

export default JobTwo