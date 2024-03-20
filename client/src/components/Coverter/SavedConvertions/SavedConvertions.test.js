import React from "react";
import { shallow } from "enzyme";
import SavedConvertions from "./SavedConvertions";

describe("SavedConvertions", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SavedConvertions />);
    expect(wrapper).toMatchSnapshot();
  });
});
