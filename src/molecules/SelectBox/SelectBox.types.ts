export type Variant =
  | "select"
  | "rainbowSelect"
  | "text"
  | "submit"
  | "password";

export type SelectBoxProps = {
  variant?: Variant;
  selectOptions: any[];
  activeSelectOption?: string;
  label?: string;
  value?: string;
  height?: string;
  id?: string;
  getInputedValue: (inputedValue: any) => void;
};
