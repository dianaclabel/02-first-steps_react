import { useState } from "react";


interface Props {
  name: String;
  quantity?: number;

}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {


  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    setCount(count + 1)

  }
  const handleSubtract = () => {
    if (count === 1) return;

    setCount(count - 1)
  }


  // const handleClick = () => {
  //   console.log(`click en ${name}`);
  // }




  return (
    <section style={{
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginTop: 10,

    }}>
      <span
        style={{
          width: 150,
        }}
      >{name}</span>
      <button
        //Al pasar por arriba se ejecuta la accion
        onMouseEnter={() => {
          console.log(`Mouse enter ${name}`)
        }}
        //AL realiza un click se ejecuta una accion
        // onClick={(event) => {
        //   // console.log(event)
        //   //console.log(`Click ${name}`)
        //   handleClick();
        // }}
        //Otra forma de usar el onClick
        onClick={handleAdd}
      >+1</button>
      <span>{count}</span>
      <button onClick={handleSubtract}>-1</button>
    </section>
  )
}
