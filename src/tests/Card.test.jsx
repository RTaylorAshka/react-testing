import Card from "../Card";
import { render } from "@testing-library/react";

it("Should render card without crashing", () => {
    render(<Card />);
})

it("should match snapshot", () => {
    const { asFragment } = render(<Card />);
    expect(asFragment).toMatchSnapshot();
})