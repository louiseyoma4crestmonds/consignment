import Image from "next/image";
import styles from "./Closebutton.module.css";
import { CloseButtonProps } from "./CloseButton.types";
import close from "../../../public/klose.png";

function CloseButton(props: CloseButtonProps) {
  const { onclick } = props;

  const handleOnClick = () => {
    onclick();
  };

  return (
    <div
      id="closeButton"
      aria-hidden="true"
      className={styles.buttonObject}
      onClick={() => {
        handleOnClick();
      }}
      onKeyDown={handleOnClick}
    >
      <Image src={close} />
    </div>
  );
}
export default CloseButton;
