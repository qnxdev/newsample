import Button from "./Button";

import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';

describe("Button", () => {
  it("renders without any error", function () {
    const component = shallow(<Button />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

});