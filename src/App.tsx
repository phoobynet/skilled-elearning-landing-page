import { Route, Routes } from 'react-router-dom'
import Home from './routes/home/Home'

export default function App () {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
    </Routes>
  )
}
