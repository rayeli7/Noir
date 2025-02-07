/**
 * This code was generated by Builder.io.
 */
import React from "react";
import { render } from "@testing-library/react-native";
import ConnectButton from "../ConnectButton";

describe("ConnectButton", () => {
  it("renders filled button correctly", () => {
    const { getByText } = render(
      <ConnectButton text="Test Button" variant="filled" />
    );

    expect(getByText("Test Button")).toBeTruthy();
  });

  it("renders outlined button correctly", () => {
    const { getByText } = render(
      <ConnectButton text="Test Button" variant="outlined" />
    );

    expect(getByText("Test Button")).toBeTruthy();
  });
});
