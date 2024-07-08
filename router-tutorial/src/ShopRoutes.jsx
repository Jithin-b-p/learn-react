import { Route, Routes, useSearchParams } from "react-router-dom";
import ShopLayout from "./ShopLayout";
import Shop from "./Shop";
import Book from "./Book";
import Newbook from "./Newbook";

function ShopRoutes() {
  const [searchParams, setSearchParams] = useSearchParams({ name: "jithin" });

  return (
    <>
      <Routes>
        <Route element={<ShopLayout />}>
          <Route index element={<Shop />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<Newbook />} />
        </Route>
      </Routes>
      <input
        type="text"
        value={searchParams.get("name")}
        onChange={(e) => setSearchParams({ name: e.target.value })}
      />
    </>
  );
}

export default ShopRoutes;
