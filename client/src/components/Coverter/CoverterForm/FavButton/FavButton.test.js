import React from "react";
import { shallow } from "enzyme";
import FavButton from "./FavButton";

describe("FavButton", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FavButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
