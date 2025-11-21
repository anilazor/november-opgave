"use server";

export const submitAnimal = async (prevState, formData) => {
  const error = {};
  const productName = formData.get("productname");
  const productPrice = formData.get("productprice");
  if (!productName) {
    error.productName = "Feltet skal udfyldes";
  } else if (productName.length < 5) {
    error.productName = "Ordet skal indeholde mindst 5 tegn";
  }
  if (!productPrice) {
    error.productPrice = "Indtast en pris";
  } else if (isNaN(Number(productPrice))) {
    error.productPrice = "Indtast en gyldig pris";
  }

  if (Object.keys(error).length > 0) {
    return { error, productName, productPrice };
  }

  return { success: true };
};
