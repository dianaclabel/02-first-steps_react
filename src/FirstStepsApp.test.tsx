import { describe, test, expect, vi, afterEach } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";
import { render, screen } from "@testing-library/react";

const mockItemCounter = vi.fn((_props: unknown) => {
  return <div data-testid="ItemCounter" />
})

vi.mock('./shopping-cart/ItemCounter', () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}))

// vi.mock('./shopping-cart/ItemCounter', () => ({
//   ItemCounter: (props: unknown) => <div data-testid="ItemCounter" name={props.name}  quantity={props.quantity}/>

// }))

describe('FirstStepsApp', () => {

  // Esto nos permite limpiar despues de cada una de las prubas
  afterEach(() => {
    vi.clearAllMocks()
  })

  // prueba 1
  test('should match snapshot', () => {

    const { container } = render(<FirstStepsApp />);
    expect(container).toMatchSnapshot();

    screen.debug()

  })

  // prueba 2
  test('should render the correct number of itemCounter components', () => {

    render(<FirstStepsApp />)

    const itemCounters = screen.getAllByTestId('ItemCounter');

    expect(itemCounters.length).toBe(3);

    //screen.debug();
  })

  // prueba 3
  test('should render ItemCounter with correct props y 3 veces', () => {
    render(<FirstStepsApp />)

    //toHaveBeenCalledTimes -> indica cuantas veces ha sido llamado el mockItemCounter 
    // en este caso fue llamado 9 veces incluyendo los otros test de arriba
    expect(mockItemCounter).toHaveBeenCalledTimes(3);

    expect(mockItemCounter).toHaveBeenCalledWith({
      name: 'Nintendo Switch 2',
      quantity: 1,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: 'Pro controller',
      quantity: 2,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: 'Super Smash',
      quantity: 5,
    })

  })

})