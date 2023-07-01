import { useEffect, useState } from 'react'
import TwitCard from './components/Card/TwitCard'
import { getUsers } from './api/Api'
import CardGallary from './components/CardGallary'

function App() {
  const [users, setUsers] = useState(null)

  return (
    <>
    <CardGallary users={users}/>
    </>
  )
}

export default App
