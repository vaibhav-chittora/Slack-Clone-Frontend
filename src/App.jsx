import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from './components/ui/toaster'
import { AppContextProvider } from './context/AppContextProvider'
import { AppRoutes } from '@/routes/Routes'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>

        <AppRoutes />

      </AppContextProvider>

      <Toaster />
    </QueryClientProvider>
  )
}

export default App
