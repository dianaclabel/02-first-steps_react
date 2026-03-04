import { ItemCounter } from "./shopping-cart/ItemCounter";

interface itemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: itemInCart[] = [
  { productName: "Nintendo Switch 2", quantity: 1 },
  { productName: "Pro controller", quantity: 2 },
  { productName: "Super Smash", quantity: 5 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>
      {
        itemsInCart.map(({ productName, quantity }) => (
          <ItemCounter key={productName} name={productName} quantity={quantity} />
        ))
      }

    </>
  )
}