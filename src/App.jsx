import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import DailyBytes from './pages/DailyBytes'
import Fambot from './pages/Fambot'
import Home from './pages/Home'
import Notification from './pages/Notification'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="fambot" element={<Fambot />} />
      <Route path="dailyBytes" element={<DailyBytes />} />
      <Route path="notifications" element={<Notification />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App