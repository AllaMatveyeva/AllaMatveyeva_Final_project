import { withTranslator } from "../../hoc/withTranslator";
import "./footer.scss";

function Footer(props) {
  return (
    <footer className="footer">
      <p className="text">{props.translate("footer.adress")}</p>
      <p className="text">{props.translate("footer.contact")}</p>
    </footer>
  );
}
export default withTranslator(Footer);
