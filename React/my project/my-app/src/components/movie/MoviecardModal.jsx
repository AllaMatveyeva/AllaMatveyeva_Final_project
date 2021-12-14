import ModalWindow from "../modalWindow/modal";
import { plotArr } from "../resources/plotArr";
import "./MoviecardModal.scss";

function MoviecardModal(props) {
  const { onClose, target } = props;
  console.log(props);
  return (
    <>
      <ModalWindow onClose={onClose}>
        <div className="plot">
          {plotArr.map(
            (plot) =>
              plot.name === target && <p className="plot">{plot.story}</p>
          )}
        </div>
      </ModalWindow>
    </>
  );
}

export default MoviecardModal;
