import { useState } from "react";
import { CheckBoxProps } from "./CheckBox.types";
import styles from "./CheckBox.module.css";

function CheckBox(props: CheckBoxProps) {
  const { state = "default", checked, id, getCheckedElement } = props;
  const [internalChecked, setInternalChecked] = useState(checked);

  /*
  useEffect(() => {
    getCheckedElement([id, internalChecked]);
  }, [internalChecked]);

  */

  return (
    <div
      id={id}
      className={`w-6 h-6 flex place-content-center cursor-pointer  ${
        state === "default"
          ? styles.default
          : state === "disabled"
          ? styles.disabled
          : state === "error"
          ? styles.error
          : ""
      } ${internalChecked || checked ? styles.checked : styles.unchecked}`}
      onClick={() => {
        setInternalChecked(!internalChecked);
        getCheckedElement([id, !internalChecked]);
      }}
      role="button"
      tabIndex={0}
      onKeyDown={() => {
        setInternalChecked(!internalChecked);
        getCheckedElement([id, !internalChecked]);
      }}
    >
      .
      <div className={internalChecked || checked ? "self-center" : "hidden"}>
        <svg
          width="14"
          height="10"
          viewBox="0 0 14 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.3337 1L5.00033 8.33333L1.66699 5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default CheckBox;
