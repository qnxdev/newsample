import React from "react";

import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Button from "./Button";

describe("Button", () => {
  it("should render without issues", () => {
    const component = shallow(<Button />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('when called onClick event function should be called', () => {
    const result = 'I was Pressed';
    const mockFn = jest.fn(() => result);
    const component = shallow(<Button isLoading={false} fn={mockFn} />);

    expect(mockFn).not.toHaveBeenCalled();

    component.props().onClick();
    expect(mockFn.mock.calls.length).toBe(1);
    expect(component.props().onClick()).toBe(result);
  });
  
  it('button should render content passed to it', () => {
    const title = 'Primary Button';
    const component = shallow(<Button >{title}</Button>);
    expect(component.props().children).toBe(title);
  });
  
  it('should not call onPress event when loading is true', () => {
    const result = 'I was pressed';
    const mockFn = jest.fn(() => result);

    const component = shallow(<Button isLoading={true} fn={mockFn} />);

    component.props().onClick();
    expect(mockFn.mock.calls.length).toBe(0);
  });

});
