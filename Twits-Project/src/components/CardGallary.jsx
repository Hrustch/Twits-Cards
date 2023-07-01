import React from 'react'
import TwitCard from './Card/TwitCard'

const CardGallary = (users) => {
    console.log(users)
  return (
    <>
    <ul>
        {users.map((user)=>{
            return <li key={user.id}><TwitCard data={user}/></li>
        })}
    </ul>
    </>
  )
}

export default CardGallary