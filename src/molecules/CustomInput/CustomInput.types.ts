export type CustomInputVariant =
  | "text"
  | "textarea"
  | "number"
  | "password"
  | "email"
  | "phone"
  | "date"
  | "time"
  | "select"
  | "selectBox"
  | "submit";

export type CustomInputWidth = "normal" | "full" | "middle";
export type CustomInputHeight = "small" | "medium" | "large";

export type CustomInputProps = {
  variant?: CustomInputVariant;
  width?: CustomInputWidth;
  height?: CustomInputHeight;
  disabled?: boolean;
  selectOptions?: any[];
  preSelection?: string;
  required?: boolean;
  label?: string;
  value?: string;
  id?: string;
  countryCode?: number;
  placeholder?: string;
  isEmpty?: boolean;
  getInputedValue: (inputedValue: any) => void;
  errMsg?: string;
  actionCallBack?: (arg: string | number) => void;
  readonly?: boolean;
  traceChanges?: () => void;
  textLimit?: number;
  defaultDate?: any;
  defaultTime?: Date;
};
