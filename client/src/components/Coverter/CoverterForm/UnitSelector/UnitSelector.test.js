import React from "react";
import { shallow } from "enzyme";
import UnitSelector from "./UnitSelector";

describe("UnitSelector", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UnitSelector />);
    expect(wrapper).toMatchSnapshot();
  });
});
