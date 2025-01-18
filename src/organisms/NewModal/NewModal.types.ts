export type NewModalVariant = "primary" | "secondary";

export type NewModalWidth = "normal" | "full";

export type NewModalProps = {
  variant?: NewModalVariant;
  width?: NewModalWidth;
  children?: React.ReactNode;
  showModal?: boolean;
  modalHeading: string;
  setShowModal: (modalStatus: boolean) => void;
};
