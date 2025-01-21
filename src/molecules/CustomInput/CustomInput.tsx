import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import classNames from "classnames";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SelectInputDropdownArrow from "@/atoms/Icons/SelectInputDropdownArrow";
import CalendarIcon from "@/atoms/Icons/CalendarIcon";
import SelectBox from "../SelectBox";
import styles from "./CustomInput.module.css";
import { CustomInputProps } from "./CustomInput.types";

function CustomInput(props: CustomInputProps) {
  /* Variable definitions */

  const {
    variant = "primary",
    width = "normal",
    height = "medium",
    label,
    id,
    disabled,
    required = true,
    countryCode,
    placeholder,
    value,
    getInputedValue,
    selectOptions,
    isEmpty,
    errMsg,
    actionCallBack,
    readonly,
    traceChanges,
    textLimit,
    preSelection,
    defaultDate = new Date().toISOString(),
    defaultTime,
  } = props;
  const CustomInputClassName = classNames({
    [styles.CustomInput]: true,
    [styles.fullWidth]: width === "full",
    [styles.normalWidth]: width === "normal",
    [styles.middleWidth]: width === "middle",
    [styles.smallHeight]: height === "small",
    [styles.mediumHeight]: height === "medium",
    [styles.largeHeight]: height === "large",
    [styles.disabled]: disabled === true,
  });

  useEffect(() => {
    console.log(preSelection);
  });

  // const [chosenDate, setChosenDate] = useState(defaultDate);
  // const [chosenTime, setChosenTime] = useState(defaultTime);

  const [showSelectDropDown, setShowSelectDropDown] = useState<boolean>(false);
  // const [selectedOption, setSelectedOption] = useState<string>("");

  /* Function definitions */
  const toggleShowSelectDropDown = () => {
    setShowSelectDropDown(!showSelectDropDown);
  };

  const outerFrame = useRef<HTMLDivElement>(null);
  useOnClickOutside(outerFrame, () => {
    setShowSelectDropDown(false);
  });

  useEffect(() => {
    // if(defaultTime!==)
  });

  return (
    <div ref={outerFrame}>
      <div className="flex gap-1 text-sm text-white900">
        {label === " " ? <div className="h-6" /> : null}
        <div className=" text-neutral-800 font-medium text-base">{label}</div>
        <div className={required ? "text-[#e21d1f]" : "hidden"}>*</div>
        <div className={isEmpty ? "ml-2 text-sm text-red500" : "hidden"}>
          This field is required
        </div>
        <div className={errMsg === "" ? "hidden" : "ml-2 text-sm text-red500"}>
          {errMsg}
        </div>
      </div>
      <div className="w-full">
        {variant === "time" ? (
          <div className="w-full pt-1 pb-1 px-4 h-[33px] gap-x-1 border border-white400 flex outline-none text-base text-white700 rounded-md bg-white">
            <div className="self-center">
              <CalendarIcon />
            </div>
            <div className="self-center">
              <DatePicker
                required
                className="self-center  h-full w-full  outline-none bg-white"
                selected={defaultTime}
                showTimeSelect
                showTimeSelectOnly
                dateFormat="h:mm aa"
                onChange={(time: any) => {
                  console.log("the time is: ", time);
                  if (getInputedValue) {
                    getInputedValue(time);
                  }
                }}
              />
            </div>
          </div>
        ) : variant === "date" ? (
          <div className="w-full pt-1 pb-1 px-4 h-[33px] gap-x-1 border border-white400 flex outline-none text-base text-white700 rounded-md bg-white">
            <div className="self-center">
              <CalendarIcon />
            </div>
            <div className="self-center">
              <DatePicker
                required
                className="self-center w-full h-full  outline-none bg-white"
                selected={defaultDate}
                dateFormat="dd/MM/yyyy"
                onChange={(date: any) => {
                  if (getInputedValue) {
                    getInputedValue(date);
                  }
                }}
              />
            </div>
          </div>
        ) : variant === "textarea" ? (
          <textarea
            required={required}
            className={styles.textArea}
            placeholder={placeholder}
            readOnly={readonly}
            value={value}
            id={id}
            onChange={(event) => {
              if (getInputedValue) {
                if (textLimit) {
                  if (event.target.value.length <= textLimit) {
                    getInputedValue(event.target.value);
                    if (actionCallBack) {
                      actionCallBack(event.target.value);
                    }
                  }
                } else {
                  getInputedValue(event.target.value);
                  if (actionCallBack) {
                    actionCallBack(event.target.value);
                  }
                }
              }
              if (traceChanges) {
                traceChanges();
              }
            }}
          />
        ) : variant === "text" ? (
          <input
            required={required}
            className={CustomInputClassName}
            placeholder={placeholder}
            readOnly={readonly}
            type="text"
            value={value}
            id={id}
            onChange={(event) => {
              if (getInputedValue) {
                if (textLimit) {
                  if (event.target.value.length <= textLimit) {
                    getInputedValue(event.target.value);
                    if (actionCallBack) {
                      actionCallBack(event.target.value);
                    }
                  }
                } else {
                  getInputedValue(event.target.value);
                  if (actionCallBack) {
                    actionCallBack(event.target.value);
                  }
                }
              }
              if (traceChanges) {
                traceChanges();
              }
            }}
          />
        ) : variant === "number" ? (
          <input
            required={required}
            className={CustomInputClassName}
            placeholder={placeholder}
            type="text"
            value={value}
            id={id}
            onChange={(event) => {
              if (getInputedValue) {
                const re = /^\d*\.?\d*$/;
                if (event.target.value === "") {
                  getInputedValue(0);
                  if (actionCallBack) {
                    actionCallBack(event.target.value);
                  }
                }
                if (re.test(event.target.value)) {
                  getInputedValue(Number(event.target.value));
                  if (actionCallBack) {
                    actionCallBack(event.target.value);
                  }
                  if (traceChanges) {
                    traceChanges();
                  }
                }
              }
            }}
          />
        ) : variant === "password" ? (
          <input
            className={CustomInputClassName}
            placeholder={placeholder}
            id={id}
            type="password"
            required={required}
            onChange={(event) => {
              if (getInputedValue) {
                getInputedValue(event.target.value);
              }
              if (traceChanges) {
                traceChanges();
              }
            }}
          />
        ) : variant === "email" ? (
          <input
            id={id}
            className={CustomInputClassName}
            placeholder={placeholder}
            type="email"
            value={value}
            required={required}
            disabled={disabled}
            onChange={(event) => {
              if (getInputedValue) {
                getInputedValue(event.target.value);
              }
              if (traceChanges) {
                traceChanges();
              }
            }}
          />
        ) : variant === "select" ? (
          <div className="relative">
            <div
              tabIndex={0}
              id={id}
              role="button"
              onKeyDown={() => {}}
              onClick={toggleShowSelectDropDown}
              className={`${CustomInputClassName} flex justify-between cursor-pointer`}
            >
              <input
                className={styles.selectVariant}
                id={id}
                placeholder={placeholder}
                value={value === "" && value === undefined ? "" : value}
                required={required}
              />
              <div className="self-center cursor-pointer">
                <SelectInputDropdownArrow />
              </div>
            </div>
            <div
              id="dropdown_div"
              className={
                !showSelectDropDown
                  ? "hidden"
                  : "relative h-[148px] text-base text-white700 bg-white100 relative overflow-y-scroll z-50"
              }
            >
              {selectOptions !== undefined ? (
                selectOptions.map((selectOption) => (
                  <div
                    className="border p-1 cursor-pointer"
                    tabIndex={0}
                    role="button"
                    onKeyDown={() => {}}
                    onClick={() => {
                      // setSelectedOption(selectOption);
                      if (getInputedValue) {
                        getInputedValue(selectOption);
                      }

                      toggleShowSelectDropDown();
                    }}
                  >
                    {selectOption}
                  </div>
                ))
              ) : (
                <div>No select values provided</div>
              )}
            </div>
          </div>
        ) : variant === "selectBox" ? (
          <div>
            <SelectBox
              selectOptions={selectOptions || []}
              getInputedValue={getInputedValue}
              activeSelectOption={preSelection}
            />
          </div>
        ) : variant === "phone" ? (
          <div className={`${CustomInputClassName} flex`}>
            <div className="self-center w-16 text-black300">
              {countryCode} |
            </div>
            <input
              className="self-center w-full outline-none bg-white100"
              placeholder={placeholder}
              id={id}
              required={required}
              type="tel"
              onChange={(event) => {
                if (getInputedValue) {
                  getInputedValue(event.target.value);
                }
                if (traceChanges) {
                  traceChanges();
                }
              }}
            />
          </div>
        ) : variant === "submit" ? (
          <input
            className={`${CustomInputClassName} cursor-pointer bg-black900`}
            type="submit"
            id={id}
            required={required}
            value="submit"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CustomInput;
