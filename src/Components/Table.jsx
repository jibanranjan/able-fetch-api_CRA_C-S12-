import { useStatet, useEffect } from 'react'
import React from 'react'
import './Table.css'
import { useState } from 'react'
function Table() {

const[user, setUser] = useState([])

 useEffect(()=>{
     getData()

 },[])



const getData =()=> {
fetch("https:randomuser.me/api/?results=20")
.then((res)=> res.json())
.then((data)=>{ 
    setUser(data.results)
    console.log(data)
})}



  return (
    <div className='tableDiv' >

    <table  className='tablebody' cellPadding={10}>
         <thead>
            <tr className='tableh'> <th>User Image</th>
                <th>Name</th>
                 <th>Gender</th>
                  <th>Email</th>
                  <th>City</th>
             </tr>
        </thead>

                     <tbody> 
                         { user.map((element)=>{
                             return<tr className='tablRow'><td><img src={element.picture.large} /></td>
                                 <td>{element.name.first}&nbsp;&nbsp;&nbsp;{element.name.last}</td>
                                 <td>{element.gender}</td>
                                 <td>{element.email}</td>
                                 <td>{element.location.city}</td>
                                

                             </tr>
                         })

                         }

                     </tbody>

     </table>




    </div>
  )
}

export default Table;