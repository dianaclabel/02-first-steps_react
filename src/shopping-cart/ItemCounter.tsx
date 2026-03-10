import { useState } from "react";
// import "./ItemCounter.css"
import styles from './ItemCounter.module.css'


interface Props {
  name: string;
  quantity?: number;

}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {


  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    console.log('Hola mundo desde ItemCounter');

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
    <section className={styles.itemRow}>
      <span
        className={styles['item-text']}
        style={{
          color: count === 1 ? 'red' : 'black'
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
