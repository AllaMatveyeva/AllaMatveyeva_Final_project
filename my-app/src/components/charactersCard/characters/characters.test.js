import { render, screen, cleanup, findByText } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import { Provider } from "react-redux";
import Characters from "../characters/characters";

import store from "../../../store/store";
import { getComers } from "../../../api/api";

jest.mock("axios");
jest.mock("../../../api/loader", () => () => <span>Loading</span>);

jest.mock("../charactersCard", () => ({ character }) => ({
  __esModule: true,
  default: jest.fn(() => <li data-testid="user-card">{character.name}</li>),
}));

jest.mock("../../../hoc/withTranslator", () => {
  return {
    withTranslator: (component) => component,
  };
});

const renderWithRedux = (component) => ({
  ...render(<Provider store={store}>{component}</Provider>),
});

// afterEach(() => {
//   cleanup();
// });

let characters = {
  data: [
    {
      _id: "5cd99d4bde30eff6ebccfd06",
      birth: "YT 1362",
      death: "Still alive: Departed over the sea on ,September 29 ,3021",
      gender: "Female",
      name: "Galadriel",
      race: "Elf",
      wikiUrl: "http://lotr.wikia.com//wiki/Galadriel",
    },
    {
      _id: "5cd99d4bde30eff6ebccfd05",
      name: "Galar",
      race: "Dwarf",
      wikiUrl: "http://lotr.wikia.com//wiki/Galar",
    },
  ],
};
const letter = "G";
describe("Users Page", () => {
  describe("Response process", () => {
    test("Success response", async () => {
      axios.get.mockResolvedValueOnce(characters);

      const { findAllByTestId } = renderWithRedux(<Characters />);

      const cards = await findAllByTestId("user-card");
      expect(cards).toHaveLength(2);
      //const cards = await findAllByTestId("user-card");
      // expect(cards).toHaveLength(2);
      // expect(cards[0]).toHaveTextContent(/AlexName/i);
      // expect(cards[1]).toHaveTextContent(/Tom/i);
    });
  });
});
