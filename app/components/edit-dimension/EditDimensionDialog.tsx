import { Modal, ModalOptions } from "flowbite";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Button } from "../buttons/Button";
import { QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/react/20/solid';
import Link from "next/link";

export type EditDimensionDialogProps = {
  setOpen: (status: boolean) => void;
  open: boolean;
}

const EditDimensionDialog = ({open, setOpen}: EditDimensionDialogProps) => {
  const [dialog, setDialog] = useState<Modal | undefined>();
  const [isOpen, setIsOpen] = useState(false);
  const modal = useRef<HTMLDivElement>(null);

  const options = useMemo<ModalOptions>(() => ({
    placement: "center",
    backdrop: "dynamic",
    backdropClasses: "bg-gray-900 bg-opacity-50 fixed inset-0 z-40",
    closable: true,
    onHide: () => {
      setIsOpen(false);
      setOpen(false);
    },
  }), [setOpen]);

  const handleHide = () => dialog?.hide();

  useEffect(() => {
    setIsOpen(open);
    if (isOpen) {
      dialog?.show();
    }
  }, [open, isOpen, dialog]);

  useLayoutEffect(() => {
    setDialog(new Modal(modal.current, options));
  }, [options, modal]);

  return (
    <div
      ref={modal}
      tabIndex={-1}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative w-fit">
        {/* Modal content */}
        <div className="relative left-1/2 -translate-x-1/2 bg-white p-5 rounded-lg shadow w-96 h-72">
          <div className="flex flex-col justify-between h-full">
            {/* <!-- Modal header --> */}
            <div className="flex items-end">
              <button
                type="button"
                className="text-dark bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                onClick={handleHide}
              >
                <XMarkIcon 
                  className="w-6 h-6 stroke-current"
                  aria-hidden="true"
                />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="flex flex-col justify-center items-center">
              <div>
                <QuestionMarkCircleIcon 
                  className="w-5 h-5 fill-amber-500"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-black text-lg font-bold text-center my-2">
                Exit without saving?
              </h3>
              <p className="text-base leading-normal text-black text-center m-0">
                Are you sure? Changes will be lost.
              </p>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center justify-center gap-2">
              <Button
                type="button"
                className="text-black border-black focus:ring-black border-[3px] hover:bg-gray-200 px-6"
                outlined
                onClick={handleHide}
              >
                Cancel
              </Button>
              <Link href="/edit">
                <Button
                  type="button"
                  className="text-white bg-black hover:bg-dark hover:text-gray-200 focus:ring-0"
                  onClick={handleHide}
                >
                  Exit Anyways
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditDimensionDialog;