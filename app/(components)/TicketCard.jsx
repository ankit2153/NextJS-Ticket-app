import React from 'react'
import Cancel from './Cancel'
import Progress from './Progress'
import Status from './Status'



function TicketCard({ticket}) {

  return (
    <div className='border-2 border-black w-full bg-gradient-to-t from-orange-400 to-red-500 p-2 rounded '>

        <div className=' flex justify-end'> <Cancel id={ticket._id} /></div>
        
        <h1 className="font-extrabold underline text-amber-950">{ticket.title}</h1>

        <p className='font-normal'>{ticket.description}</p>
        
       <Progress progress={ticket.progress}/>
       <h3 className='font-semibold text-end mr-2 text-black'>{ticket.progress}%</h3>
       <Status/>



    </div>
  )
}

export default TicketCard