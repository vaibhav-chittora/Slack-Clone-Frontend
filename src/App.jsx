import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth/Auth'
import Notfound from '@/pages/Notfound/Notfound'
import SignupContainer from '@/components/organisms/Auth/SignupContainer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from './components/ui/toaster'
import SigninContainer from './components/organisms/Auth/SigninContainer'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>

      <Routes>
        <Route path="/auth/signup" element={<Auth ><SignupContainer /></Auth>} />
        <Route path="/auth/signin" element={<Auth ><SigninContainer /></Auth>} />
        <Route path='/home' element={<Auth> <h1>Home</h1> </Auth>} />


        <Route path='*' element={<Notfound />} />
      </Routes>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
