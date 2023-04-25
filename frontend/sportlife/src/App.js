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
        <EditProductProvider>
          <CartProvider>
            <BurguerProvider>
              <CommentProvider>
                  <AppRoutes />
              </CommentProvider>
            </BurguerProvider>
          </CartProvider>
        </EditProductProvider>
      </UserProvider>
    </AuthProvider>
  )
}

export default App;
