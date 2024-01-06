"use client"

import React from 'react'

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/navigation';


function Cancel({id}) {

  const router = useRouter();

  const DeleteTicket = async () =>{

    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/Tickets/${id}`,{
      method:"DELETE"
    });

    if(res.ok){

      router.refresh()
      
    }

  } 

  return (
    <div className='text-red-600 rounded-full' onClick={DeleteTicket}>

        <FontAwesomeIcon className='h-5 hover:cursor-pointer '  icon={faX} />


    </div>
  )
}

export default Cancel