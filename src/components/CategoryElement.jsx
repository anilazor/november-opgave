"use client";
import { useRouter, useSearchParams } from "next/navigation";


const CategoryElement = ({ category }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams?.get("category");
  const isSelected = selectedCategory === category;

  return (
    <div className={"capitalize max-w-48 shrink-0 text-center hover:cursor-pointer border border-solid border-stone-400 text-stone-400 rounded-full p-4 " + (isSelected ? "selected" : "")} onClick={() => router.push(`?category=${category}`)}>
      {category}
    </div>
  );
};

export default CategoryElement;
