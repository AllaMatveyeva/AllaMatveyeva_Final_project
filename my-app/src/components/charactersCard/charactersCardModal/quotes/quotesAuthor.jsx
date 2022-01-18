import store from "../../../../store/store";

const charactersFromStore = store.getState().characters;
function quotesAuthor(id) {
  if (
    charactersFromStore.characters.length === 0 ||
    !charactersFromStore.characters
  ) {
    return localStorage.getItem(`quotesAuthor_${id}`) || null;
  } else {
    const characterWithId = charactersFromStore.characters.filter(
      (item) => item._id === id
    );
    localStorage.setItem(`quotesAuthor_${id}`, characterWithId[0].name);
    return characterWithId[0].name;
  }
}

export default quotesAuthor;
