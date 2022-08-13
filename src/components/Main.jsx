import { Routes, Route } from 'react-router-dom'
import Index from '../pages/Index'
import Show from '../pages/Show'

function Main() {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Index />} />
                <Route exact path='/notes/:id' element={<Show />} />
            </Routes>
        </div>
    )
}

export default Main