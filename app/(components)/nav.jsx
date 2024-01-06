import { faTicket, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

function Nav() {
  
  return (
    
    <nav className="flex justify-between items-center border-b-2 border-red-500 bg-nav p-4 ">

      <div className="flex items-center space-x-4">

        <Link href="/">

        <FontAwesomeIcon className="icon" icon={faHome} /> Home 
        
        </Link>
      
        <Link href="/TicketPage/new">
          <FontAwesomeIcon className="icon" icon={faTicket} />Ticket 
        </Link>

      </div>

    
      <div>
        <p className="text-default-text">ankit@gmail.com</p>
      </div>

    </nav>
  );
}

export default Nav;
