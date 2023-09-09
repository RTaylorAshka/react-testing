import Carousel from "../Carousel";
import { render, fireEvent } from "@testing-library/react";

it("Should render app without crashing", () => {
    render(<Carousel />);
})

it("should match snapshot", () => {
    const { asFragment } = render(<Carousel />);
    expect(asFragment).toMatchSnapshot();
})

it("should display next image on right arrow click", () => {
    const { getByTestId, getByText } = render(<Carousel />);
    const rightArrow = getByTestId('right-arrow');
    expect(getByText("Photo by Richard Pasquarella on Unsplash", { exact: true })).toBeTruthy();
    fireEvent.click(rightArrow);
    expect(getByText("Photo by Pratik Patel on Unsplash", { exact: true })).toBeTruthy();
})

it("should display previous image on left arrow click", () => {
    const { getByTestId, getByText } = render(<Carousel />);
    const rightArrow = getByTestId('right-arrow');
    fireEvent.click(rightArrow);
    expect(getByText("Photo by Pratik Patel on Unsplash", { exact: true })).toBeTruthy();
    const leftArrow = getByTestId('left-arrow');
    fireEvent.click(leftArrow);
    expect(getByText("Photo by Richard Pasquarella on Unsplash", { exact: true })).toBeTruthy();
})

it("should hide left arrow on first image", () => {
    const { getByTestId } = render(<Carousel />);
    const leftArrow = getByTestId('left-arrow');
    expect(leftArrow).not.toBeVisible();

})

it("should hide right arrow on last image", () => {
    const { getByTestId } = render(<Carousel />);
    const rightArrow = getByTestId('right-arrow');
    fireEvent.click(rightArrow);
    fireEvent.click(rightArrow);
    expect(rightArrow).not.toBeVisible();
})