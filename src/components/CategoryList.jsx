import { Suspense } from "react";
import CategoryElement from "./CategoryElement";

const CategoryList = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FetchCategory />
    </Suspense>
  );
};

const FetchCategory = async () => {
  "use server";
  const response = await fetch("https://dummyjson.com/products/category-list");
  const categories = await response.json();
  return categories.map((category) => <CategoryElement category={category} key={category} />);
};

export default CategoryList;
