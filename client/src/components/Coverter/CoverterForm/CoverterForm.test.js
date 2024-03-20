import React from "react";
import { shallow } from "enzyme";
import CoverterForm from "./CoverterForm";

describe("CoverterForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CoverterForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
