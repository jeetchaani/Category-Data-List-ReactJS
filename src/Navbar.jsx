import React from 'react'
import './App.css';

export default function Navbar({categoryArray,loadItem}) {
       
  return (
    <>
          <nav>
               <ul className='nav-main'>
                    <li onClick={() =>loadItem("All")}>All</li>
                     { categoryArray.map((currentElement) =>{
                          return(
                            <>
                            <li onClick={() =>loadItem(currentElement)}>{ currentElement }</li>
                       
                            </>
                          )
                     }) }
                    
                   
               </ul>
          </nav>
          
    </>
  )
}
