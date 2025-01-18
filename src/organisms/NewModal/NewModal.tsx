import { NewModalProps } from "./NewModal.types";

function NewModal(props: NewModalProps) {
  const { children, modalHeading, setShowModal, showModal = false } = props;

  return (
    <div className={!showModal ? "hidden" : " flex place-content-center"}>
      <div className="w-6/12 phone:w-11/12 bg-white rounded-lg absolute top-16  z-50 drop-shadow-md px-3.5 py-4  ">
        <div className="flex justify-between px-4 pb-2 border-b-2 ">
          <div className="self-center text-base font-bold">{modalHeading}</div>
          <div
            className="cursor-pointer"
            tabIndex={0}
            role="button"
            onKeyDown={() => {}}
            onClick={() => {
              setShowModal(false);
            }}
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.001 2.03589C6.49098 2.03589 2.00098 6.52589 2.00098 12.0359C2.00098 17.5459 6.49098 22.0359 12.001 22.0359C17.511 22.0359 22.001 17.5459 22.001 12.0359C22.001 6.52589 17.511 2.03589 12.001 2.03589ZM15.361 14.3359C15.651 14.6259 15.651 15.1059 15.361 15.3959C15.211 15.5459 15.021 15.6159 14.831 15.6159C14.641 15.6159 14.451 15.5459 14.301 15.3959L12.001 13.0959L9.70098 15.3959C9.55098 15.5459 9.36098 15.6159 9.17098 15.6159C8.98098 15.6159 8.79098 15.5459 8.64098 15.3959C8.35098 15.1059 8.35098 14.6259 8.64098 14.3359L10.941 12.0359L8.64098 9.73589C8.35098 9.44589 8.35098 8.96589 8.64098 8.67589C8.93098 8.38589 9.41098 8.38589 9.70098 8.67589L12.001 10.9759L14.301 8.67589C14.591 8.38589 15.071 8.38589 15.361 8.67589C15.651 8.96589 15.651 9.44589 15.361 9.73589L13.061 12.0359L15.361 14.3359Z"
                fill="#292D32"
              />
            </svg>
            .
          </div>
        </div>

        <div className="laptop:h-[300px] phone:h-[200px] pb-4 overflow-y-scroll no-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
}

export default NewModal;
