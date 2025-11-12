import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

const ProductList = ({ category }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FetchProduct category={category} />
    </Suspense>
  );
};

const FetchProduct = async ({ category }) => {
  "use server";
  const url = category ? `https://dummyjson.com/products/category/${category}` : "https://dummyjson.com/products";
  console.log(category);
  const response = await fetch(url);
  const { products } = await response.json();
  return products.map((product) => (
    <Link className="product-card " href={`/details/${product.id}`} key={product.id}>
      <div className="rounded-4xl shadow-2xl shadow-stone-300 bg-background break-inside-avoid mb-4">
        <div className="list-img-wrapper rounded-4xl">
          <Image loading="eager" alt={product.title} src={product.thumbnail} width={300} height={200}></Image>
        </div>
        <div className="p-4">
          <h2>{product.title}</h2>
          <p className="text-stone-400">{product.price} $</p>
        </div>
      </div>
    </Link>
  ));
};

export default ProductList;
