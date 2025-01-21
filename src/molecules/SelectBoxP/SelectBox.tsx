/* This is a more customized select box. This select box receives an array of select options
    Each selection option is of the form name-id. 
    the name part is what shows up on the select element(both the dropdown and chosen field).
    when an option is selected from the dropdown, the id part is returned.

    If you want a regular select box behaviour user the other select box in admin or candidate specific 
    molecule component.
*/

import React, { useState } from "react";
import useClickOutside from "@/hooks/useClickOutside";
import DropdownIcon from "@/atoms/Icons/DropdownIcon";
import { SelectBoxProps } from "./SelectBox.types";
import styles from "./SelectBox.module.css";

function AMMInput(props: SelectBoxProps) {
  /* Variable definitions. */
  const {
    id,
    getInputedValue,
    selectOptions,
    activeSelectOption,
    preSelection,
    height = "33px",
  } = props;

  const [showSelectDropDown, setShowSelectDropDown] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState(activeSelectOption);

  const dropdownRef = useClickOutside(() => setShowSelectDropDown(false));

  useState(() => {
    if (activeSelectOption !== undefined && selectedOption === undefined) {
      setSelectedOption(activeSelectOption.toString());
    } else if (
      selectedOption !== undefined &&
      selectedOption !== activeSelectOption
    ) {
      setSelectedOption(selectedOption);
    }
    console.log("ssee: ", preSelection);
  });

  /* Function definitions */
  const toggleShowSelectDropDown = () => {
    setShowSelectDropDown(!showSelectDropDown);
  };

  return (
    <div
      ref={dropdownRef}
      className={`w-full h-[${height}]  border  rounded-md border-[#C2C2C2]`}
    >
      <div className="w-full h-full space-y-2 bg-white">
        <div
          className="w-full h-full flex justify-between px-4"
          tabIndex={0}
          id={id}
          role="button"
          onKeyDown={() => {}}
          onClick={toggleShowSelectDropDown}
        >
          <div className="w-full self-center bg-white">
            {selectedOption?.split("-")[0] || preSelection}
          </div>
          <div className="self-center">
            <DropdownIcon dropped={showSelectDropDown} />
          </div>
        </div>
        <div
          id="dropdown_div"
          className={!showSelectDropDown ? "hidden" : styles.selectOptionsBlock}
        >
          {selectOptions !== undefined ? (
            selectOptions.map((selectOption) => (
              <div
                id={`${id}dropDown`}
                className={styles.selectOptions}
                tabIndex={0}
                role="button"
                onKeyDown={() => {}}
                onClick={() => {
                  setSelectedOption(selectOption);
                  getInputedValue(selectOption.split("-")[1]);
                  toggleShowSelectDropDown();
                }}
              >
                <span
                  className={
                    selectedOption === selectOption ? "text-crest-black500" : ""
                  }
                >
                  {selectOption.split("-")[0]}
                </span>
              </div>
            ))
          ) : (
            <div>No selection</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AMMInput;
