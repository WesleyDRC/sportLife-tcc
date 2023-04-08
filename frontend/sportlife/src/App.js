import AppRoutes from "./routes/AppRoutes"
import  {AuthProvider} from './contexts/auth'
import { UserProvider } from "./contexts/user";
import { CartProvider } from "./contexts/cart";

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </UserProvider>
    </AuthProvider>
  )
}

export default App;
