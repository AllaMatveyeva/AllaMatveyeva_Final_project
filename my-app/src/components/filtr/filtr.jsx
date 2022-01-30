import { useParams } from "react-router-dom";
import { withTranslator } from "../../hoc/withTranslator";
import CharactersCard from "../charactersCard/charactersCard";

function Filtr(props) {
  const { optionId } = useParams();
  const { valueId } = useParams();
  const regexpValue = new RegExp(`^${valueId}`, "ig");
  const charactersString = localStorage.getItem("characters");
  const characters = JSON.parse(charactersString);

  const charactersFiltr = characters.filter((item) =>
    (optionId === "name" ? item.name : item.race).match(regexpValue)
  );

  const length = charactersFiltr.length;

  return (
    <>
      {length === 0 && (
        <span className="home__welcome home__welcome__text">
          {props.translate("filter.no")}
          {optionId === "name"
            ? props.translate("filter.name")
            : props.translate("filter.race")}
        </span>
      )}
      {length > 0 && (
        <ul className="users-block">
          {charactersFiltr.map((user, index) => (
            <CharactersCard key={user._id} user={user} index={index} />
          ))}
        </ul>
      )}
    </>
  );
}

export default withTranslator(Filtr);
