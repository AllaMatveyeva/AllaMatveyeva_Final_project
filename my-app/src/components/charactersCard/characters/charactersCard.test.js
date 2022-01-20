import { render, screen, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import "@testing-library/react";
import "@testing-library/user-event";
import "@testing-library/jest-dom";
import CharactersCard from "../charactersCard";
import userEvent from "@testing-library/user-event";

let getByText;

beforeEach(() => {
  ({ getByText } = render(<CharactersCard user={user} index={index} />));
});

afterEach(() => {
  cleanup();
});

jest.mock("../charactersCardModal/charactersCardModal", () => ({
  __esModule: true,
  default: ({ onClose }) => <button data-testid="modal" onClick={onClose} />,
}));

const user = {
  name: "Galadriel",
  race: "Elf",
  gender: "Female",
};

const index = 1;

describe("Characters card", () => {
  it("Data rendering", () => {
    expect(getByText(/Galadriel/i)).toBeInTheDocument();
  });

  it("Open Modal", () => {
    userEvent.click(getByText(/Galadriel/i));
    expect(screen.getByTestId("modal")).toBeInTheDocument();
  });

  it("Close Modal", () => {
    userEvent.click(getByText(/Galadriel/i));
    userEvent.click(screen.getByTestId("modal"));
    expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
  });
});
