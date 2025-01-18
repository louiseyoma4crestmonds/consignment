import React, { useState, useEffect } from "react";

export type DropdownIconProps = {
  dropped: true | false;
};

function DropdownIcon(props: DropdownIconProps) {
  const { dropped } = props;
  const [iconDropped, setIconDropped] = useState<boolean>(false);

  useEffect(() => {
    setIconDropped(dropped);
  });

  return (
    <div
      onClick={() => {
        setIconDropped(!iconDropped);
      }}
      onKeyDown={() => {
        setIconDropped(!iconDropped);
      }}
      tabIndex={0}
      role="button"
    >
      {!iconDropped ? (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.1253 6.46844L8.59775 9.996C8.18115 10.4126 7.49945 10.4126 7.08285 9.996L3.5553 6.46844"
            stroke="#9D9D9D"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="11"
          height="6"
          viewBox="0 0 11 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.1253 4.77875L6.59777 1.25119C6.18118 0.834597 5.49947 0.834597 5.08287 1.25119L1.55532 4.77875"
            stroke="#9D9D9D"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}

export default DropdownIcon;
