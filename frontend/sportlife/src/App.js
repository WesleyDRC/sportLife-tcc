import AppRoutes from "./routes/AppRoutes"
import  {AuthProvider} from './contexts/auth'

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App;
