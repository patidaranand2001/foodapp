import sum from "../sum";

// test("sum function should calculate the sum  of two no" , ()=>{
//     const  result=sum(4,3);
//     expect(result).toBe(7);
// });

test('adds 1 + 2 to equal 3', () => {
    // Use the expect function provided by Jest to make assertions
    expect(sum(1, 2)).toBe(3);
  });