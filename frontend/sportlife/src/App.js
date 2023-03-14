import AppRoutes from "./routes/AppRoutes"
import  {AuthProvider} from './contexts/auth'
import { UserProvider } from "./contexts/user";

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </AuthProvider>
  )
}

export default App;
