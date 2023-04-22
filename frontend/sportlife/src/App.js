import AppRoutes from "./routes/AppRoutes"
import  {AuthProvider} from './contexts/auth'
import { UserProvider } from "./contexts/user";
import { CartProvider } from "./contexts/cart";
import { BurguerProvider } from "./contexts/burguer";
import { CommentProvider } from "./contexts/comment";
import { EditProductProvider } from "./contexts/editProduct";

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <CartProvider>
          <BurguerProvider>
            <CommentProvider>
              <EditProductProvider>
                <AppRoutes />
              </EditProductProvider>
            </CommentProvider>
          </BurguerProvider>
        </CartProvider>
      </UserProvider>
    </AuthProvider>
  )
}

export default App;
