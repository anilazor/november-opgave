import ProductList from "@/components/ProductList";
import Scroller from "@/components/Scroller";
import { Suspense } from "react";

export default function Home({ searchParams }) {
  return (
    <div>
      <Scroller />
      <section className="columns-2  gap-4 justify-items-stretch items-start ">
        <Suspense>
          <ProductListContainer searchParams={searchParams} />
        </Suspense>
      </section>
    </div>
  );
}

async function ProductListContainer({ searchParams }) {
  const { category } = await searchParams;
  return <ProductList category={category} />;
}
