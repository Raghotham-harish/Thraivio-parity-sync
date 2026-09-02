import { useEffect } from "react";
import { createPortal } from "react-dom";
import { CheckCircle2 } from "lucide-react";

interface SuccessPopupProps {
  message: string;
  onClose: () => void;
}

const SuccessPopup = ({
  message,
  onClose,
}: SuccessPopupProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return createPortal(
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999]">
      <div
        className="
          flex
          items-center
          gap-3
          bg-white
          border
          border-green-200
          shadow-2xl
          rounded-xl
          px-5
          py-4
          min-w-[320px]
          max-w-[90vw]
        "
      >
        <CheckCircle2
          size={24}
          className="text-green-600 shrink-0"
        />

        <div>
          <p className="font-semibold text-slate-900">
            Registration Successful!
          </p>

          <p className="text-sm text-slate-500">
            {message}
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SuccessPopup;