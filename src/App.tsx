import { Route, Routes } from 'react-router-dom'
import Home from './routes/home/Home'
import Demo from '@/routes/demo/Demo'

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/demo"
        element={<Demo />}
      />
    </Routes>
  )
}
