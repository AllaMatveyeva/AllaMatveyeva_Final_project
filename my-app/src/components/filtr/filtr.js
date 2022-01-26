import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import store from "../../store/store";
import CharactersCard from "../charactersCard/charactersCard";

function Filtr(props) {
  const { optionId } = useParams();
  console.log(optionId);
  const { valueId } = useParams();
  console.log(valueId);

  const regexpValue = new RegExp(`^${valueId}`, "ig");
  const regexpOption = new RegExp(`^${optionId}`, "ig");

  const charactersString = localStorage.getItem("characters");
  const characters = JSON.parse(charactersString);
  console.log(characters);

  const char = characters.filter((item) => item.name.match(regexpValue));

  console.log(char);
  return (
    <ul className="users-block">
      {char.map((user, index) => (
        <CharactersCard key={user._id} user={user} index={index} />
      ))}
    </ul>
  );
}

export default Filtr;
