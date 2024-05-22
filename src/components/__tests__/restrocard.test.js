import { render,screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/restromockdata.json"
import "@testing-library/jest-dom";

describe("should complete this test cases ",()=>
{it("should consist of restro card name  madhuram tiffi ", ()=>{
  
    render(<RestaurantCard resData={MOCK_DATA} />)
    const name =screen.getByText("Madhuram Tiffins");
    expect(name).toBeInTheDocument();

})
it("should consist of restro card name  madhuram tiffi ", ()=>{
  
    render(<RestaurantCard resData={MOCK_DATA} />)
    const name =screen.getByText("Madhuram Tiffins");
    expect(name).toBeInTheDocument();

})


})