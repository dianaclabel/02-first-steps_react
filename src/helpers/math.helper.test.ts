import {describe, expect, test} from 'vitest'
import { add, multiply, subtract } from './math.helper'

describe('add',()=>{
   test('should add two positives numbers', ()=>{
   // ! 1. Arrange
   const a = 1;
   const b = 2;

   // !2. Act
   const result = add(a,b);
    
  //! 3. Asesert
   expect(result).toBe(a + b)
   })

   test('should add two negatives numbers', ()=>{
   // ! 1. Arrange
   const a = -2;
   const b = -4;

   // !2. Act
   const result = add(a,b);
   
  //! 3. Asesert
   expect(result).toBe( a + b)
   })

})

describe('subtrac',()=>{
   test('should add two positives numbers', ()=>{
   // ! 1. Arrange
   const a = 1;
   const b = 2;

   // !2. Act
   const result = subtract(a,b);
   //-1
    
  //! 3. Asesert
   expect(result).toBe(a - b)
   })

   test('should add two negatives numbers', ()=>{
   // ! 1. Arrange
   const a = -2;
   const b = -4;

   // !2. Act
   const result = subtract(a,b);
   // -2 - -4
   //2
   
  //! 3. Asesert
   expect(result).toBe( a - b)
   })

})

describe('multiply',()=>{
   test('should add two positives numbers', ()=>{
   // ! 1. Arrange
   const a = 1;
   const b = 2;

   // !2. Act
   const result = multiply(a,b);
   //2
    
  //! 3. Asesert
   expect(result).toBe(a * b)
   })

   test('should add two negatives numbers', ()=>{
   // ! 1. Arrange
   const a = -2;
   const b = -4;

   // !2. Act
   const result = multiply(a,b);
   // -2 * -4
   //8
   
  //! 3. Asesert
   expect(result).toBe( a * b)
   })

})

