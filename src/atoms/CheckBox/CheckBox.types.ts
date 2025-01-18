export type CheckBoxState = "default" | "disabled" | "error";

export type CheckBoxProps = {
  state: CheckBoxState;
  checked: boolean | null;
  getCheckedElement: (checkDetails: any[]) => void;
  id?: string;
};
