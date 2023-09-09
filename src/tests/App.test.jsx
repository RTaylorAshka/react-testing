import App from "../App";
import { render } from "@testing-library/react";

it("Should render app without crashing", () => {
    render(<App />);
})

it("should match snapshot", () => {
    const { asFragment } = render(<App />);
    expect(asFragment).toMatchSnapshot();
})