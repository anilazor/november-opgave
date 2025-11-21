"use client";
import { useActionState } from "react";

import { submitAnimal } from "@/app/action/action";

const formular = () => {
  const [state, postAnimal] = useActionState(submitAnimal, { error: {} });

  return (
    <form
      className="my-40 p-4 bg-pink-100 rounded-2xl shadow-2xl"
      action={postAnimal}>
      <h1 className="font-bold text-xl mb-4">Formular</h1>
      <input
        className="bg-white border me-8 p-1 rounded-2xl"
        type="text"
        name="productname"
        placeholder="Product name"
        defaultValue={state.productName}></input>
      {state.error?.productName && <p className="text-red-500 my-2">{state.error.productName}</p>}
      <input
        className="bg-white border me-8 p-1 rounded-2xl"
        type="text"
        name="productprice"
        placeholder="Product price"
        defaultValue={state.productName}></input>
      <button
        type="submit"
        className="bg-gray-100 hover:cursor-pointer border p-2 rounded-2xl">
        submitty
      </button>

      {state.error?.productPrice && <p className="text-red-500 my-2">{state.error.productPrice}</p>}

      {state.success && <p className="my-2">Tillykke! Din forespørgsel er sendt afsted...</p>}
    </form>
  );
};

export default formular;
