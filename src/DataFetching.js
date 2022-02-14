import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function DataFetching() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost/api/")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <p>Data is loading...</p>;
  }
  return (
    <div>
      <ul>
        {products ? (
          products.map((product) => (
            <li key={product.id}>{product.product_name}</li>
          ))
        ) : (
          <p></p>
        )}
      </ul>
    </div>
  );
}

export default DataFetching;
