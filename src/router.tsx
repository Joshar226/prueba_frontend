import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './views'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<Index/>}/>
        </Routes>
    </BrowserRouter>
  )
}
