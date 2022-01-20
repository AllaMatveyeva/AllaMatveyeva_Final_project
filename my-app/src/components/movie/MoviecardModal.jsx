import ModalWindow from "../modalWindow/modal";
import Plot from "../resources/plotArr";
import "./MoviecardModal.scss";

function MoviecardModal(props) {
  const { onClose, target } = props;

  return (
    <>
      <ModalWindow onClose={onClose}>
        <div className="plot">
          <Plot target={target}></Plot>
        </div>
      </ModalWindow>
    </>
  );
}

export default MoviecardModal;
