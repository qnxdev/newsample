import React from "react";

import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Button from "./components/Button";

describe("Button", () => {
  it("should render without issues", () => {
    const component = shallow(<Button />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
  it('should call onClick event', () => {
    const result = 'I was Pressed';
    const mockFn = jest.fn(() => result);
    const component = shallow(<Button fn={mockFn} />);

    expect(mockFn).not.toHaveBeenCalled();

    component.props().onClick();

    expect(mockFn.mock.calls.length).toBe(1);
    expect(component.props().onClick()).toBe(result);
  });
  it('button should render children passed to it', () => {
    const title = 'Primary Button';
    const component = shallow(<Button title={title} />);
    console.log(component.find(Text).first().props().children);
    expect(component.find(Text).first().props().children).toBe(title);
  });
});
