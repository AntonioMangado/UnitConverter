import React from "react";
import { shallow } from "enzyme";
import QuantityInput from "./QuantityInput";

describe("QuantityInput", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<QuantityInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
