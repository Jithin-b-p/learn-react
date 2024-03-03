import { Route, Routes } from "react-router-dom";
import ShopLayout from "./ShopLayout";
import Shop from "./Shop";
import Book from "./Book";
import Newbook from "./Newbook";

function ShopRoutes() {
  return (
    <Routes>
      <Route element={<ShopLayout />}>
        <Route index element={<Shop />} />
        <Route path=":id" element={<Book />} />
        <Route path="new" element={<Newbook />} />
      </Route>
    </Routes>
  );
}

export default ShopRoutes;
