import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=100");
    const { products } = await data.json();

    setProducts(products);
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <div>
      <h1 className="heading">Products</h1>

      {products.length > 0 && (
        <>
          <div className="products-list">
            {products
              .slice((page - 1) * 10, (page - 1) * 10 + 10)
              .map((product) => {
                return (
                  <div className="product" key={product.id}>
                    <img
                      className="product__img"
                      src={product.thumbnail}
                      width={500}
                      height={200}
                      alt={product.brand}
                    />
                    <div className="product-details">
                      <span className="product-details__name">
                        {product.brand}
                      </span>
                      <span className="product-details__price">
                        💲{product.price}
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="page-navigation">
            <Pagination
              currentPage={page}
              totalCount={products.length}
              pageSize={10}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
