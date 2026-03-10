import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { ItemCounter } from './ItemCounter';

describe('ItemCounter', () => {

  test('should render with default values', () => {
    const name = 'Test item';

    render(<ItemCounter name={name} />);
    // screen.debug();

    //toBeDefined => que este definido
    expect(screen.getByText(name)).toBeDefined();

    // Que no sea nulo
    expect(screen.getByText(name)).not.toBeNull();

  })

  test('should render with custom quantity', () => {
    const name = "Control de Nintendo";
    const quantity = 10;

    render(<ItemCounter name={name} quantity={quantity} />)

    expect(screen.getByText(quantity)).toBeDefined();

  })

  test('should increase count when +1 button in pressed', () => {
    render(<ItemCounter name={'test item'} quantity={1} />);

    const [buttonAdd] = screen.getAllByRole('button');
    //con innerHTML se visualiza el valor de la tag buttonAdd
    console.log(buttonAdd.innerHTML);

    //testing-library
    fireEvent.click(buttonAdd);

    expect(screen.getByText('2')).toBeDefined();

  })

  test("should decrease count  when -1 button is pressed", () => {
    const quantity = 5
    render(<ItemCounter name={'test item'} quantity={quantity} />);

    const [, buttonSustract] = screen.getAllByRole('button');
    //con innerHTML se visualiza el valor de la tag buttonAdd
    console.log(buttonSustract.innerHTML);

    //testing-library
    fireEvent.click(buttonSustract);

    expect(screen.getByText('4')).toBeDefined();

  })

  test("should not decrease count  when -1 button is presse and quantity is 1", () => {
    const quantity = 1
    render(<ItemCounter name={'test item'} quantity={quantity} />);

    const [, buttonSustract] = screen.getAllByRole('button');
    //con innerHTML se visualiza el valor de la tag buttonAdd
    console.log(buttonSustract.innerHTML);

    //testing-library
    fireEvent.click(buttonSustract);

    expect(screen.getByText('1')).toBeDefined();

  })

  test('should change to red when count is 1', () => {
    const quantity = 1
    const name = 'Test item'
    render(<ItemCounter name={name} quantity={quantity} />);

    const itemText = screen.getByText(name);

    expect(itemText.style.color).toBe('red');
  })


  test('should change to black when count is greater than 1', () => {
    const quantity = 2
    const name = 'Test item'
    render(<ItemCounter name={name} quantity={quantity} />);

    const itemText = screen.getByText(name);

    expect(itemText.style.color).toBe('black');

  })

})