import React from "react";
import { shallow } from "enzyme";
import Coverter from "./Coverter";

describe("Coverter", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Coverter />);
    expect(wrapper).toMatchSnapshot();
  });
});
