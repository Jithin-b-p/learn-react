import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
// import Shop from "./Shop";
// import Book from "./Book";
// import Newbook from "./Newbook";
import NotFound from "./NotFound";
// import ShopLayout from "./ShopLayout";
import Shopsidebar from "./Shopsidebar";
import ShopRoutes from "./ShopRoutes";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </nav>

      <aside>
        <Routes location="/shop">
          <Route path="/shop" element={<Shopsidebar />} />
        </Routes>
      </aside>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/*" element={<ShopRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
