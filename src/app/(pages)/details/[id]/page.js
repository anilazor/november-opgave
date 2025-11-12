import Image from "next/image";
import { Suspense } from "react";

export default function details({ params }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FetchProduct params={params} />
    </Suspense>
  );
}

async function FetchProduct({ params }) {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();
  return (
    <div className="">
      <div className="inner-shadow h-110  bg-(--pink) rounded-4xl flex justify-center my-5">
        <Image className="object-contain" loading="eager" alt={product.brand ? product.brand : "Product Image"} src={product.thumbnail} width={300} height={200} />
      </div>
      <h1 className="text-2xl font-semibold">{product.title}</h1>

      <div className="tag-wrapper my-5 flex flex-wrap gap-2">
        {product.tags?.map((tag) => (
          <span key={tag} className="capitalize product-tag text-sm px-3 py-2 rounded-full text-stone-500 bg-stone-50">
            {tag}
          </span>
        ))}
      </div>
      <div>
        <p className="text-md">{product.description}</p>
      </div>
    </div>
  );
}
