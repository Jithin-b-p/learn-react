import { Link, Outlet } from "react-router-dom";

function ShopLayout() {
  return (
    <div>
      <Link to="/shop/1">Book 1</Link> <br />
      <Link to="/shop/2">Book 2</Link> <br />
      <Link to="/shop/new">New book</Link>
      <br />
      <Outlet />
    </div>
  );
}

export default ShopLayout;
