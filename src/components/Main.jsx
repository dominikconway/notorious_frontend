import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from '../pages/Index'
import Show from '../pages/Show'

function Main() {

    const [notes, setNotes] = useState(null)

    const URL = 'http://notorious-notes.herokuapp.com/notes'

    const getNotes = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setNotes(data)
        
    }

    const createNotes = async (note) => {
        await fetch(URL, {
            method:'POST',
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(note),
        })
        getNotes()
    }

    useEffect(() => {getNotes()}, [])
    

    return (
        <div>
            <Routes>
                <Route exact path='/' 
                element={<Index notes={notes} createNotes={createNotes} />} />
                <Route path='/notes/:id' element={<Show notes={notes} />} />
            </Routes>
        </div>
    )
}

export default Main