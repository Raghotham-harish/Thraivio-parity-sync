import { Plus, Trash2 } from "lucide-react";

import type { SurveyOption } from "@/types/survey";

interface QuestionOptionsProps {
  options: SurveyOption[];
  onChange: (options: SurveyOption[]) => void;
  disabled?: boolean;
}

const QuestionOptions = ({
  options,
  onChange,
  disabled = false,
}: QuestionOptionsProps) => {
  const handleOptionChange = (
    optionId: string,
    value: string
  ) => {
    const updatedOptions = options.map((option) =>
      option.id === optionId
        ? {
            ...option,
            label: value,
          }
        : option
    );

    onChange(updatedOptions);
  };

  const handleAddOption = () => {
    const newOption: SurveyOption = {
      id: `option-${Date.now()}`,
      label: `Option ${options.length + 1}`,
    };

    onChange([...options, newOption]);
  };

  const handleDeleteOption = (optionId: string) => {
    if (options.length <= 1) {
      return;
    }

    onChange(
      options.filter((option) => option.id !== optionId)
    );
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-sm font-semibold text-slate-700">
            Options
          </h4>

          <p className="mt-1 text-xs text-slate-400">
            Add the choices students can select.
          </p>
        </div>

        <button
          type="button"
          onClick={handleAddOption}
          disabled={disabled}
          className="
            inline-flex
            items-center
            gap-1.5
            rounded-lg
            border
            border-blue-200
            bg-blue-50
            px-3
            py-2
            text-xs
            font-semibold
            text-blue-600
            transition
            hover:border-blue-300
            hover:bg-blue-100
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          <Plus size={15} />
          Add Option
        </button>
      </div>

      <div className="space-y-2">
        {options.map((option, index) => (
          <div
            key={option.id}
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-slate-200
              bg-white
              p-2
            "
          >
            <div
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-slate-50
                text-xs
                font-semibold
                text-slate-500
              "
            >
              {index + 1}
            </div>

            <input
              type="text"
              value={option.label}
              disabled={disabled}
              placeholder={`Option ${index + 1}`}
              onChange={(event) =>
                handleOptionChange(
                  option.id,
                  event.target.value
                )
              }
              className="
                min-w-0
                flex-1
                rounded-lg
                border
                border-transparent
                bg-transparent
                px-2
                py-2
                text-sm
                text-slate-700
                outline-none
                transition
                placeholder:text-slate-400
                hover:border-slate-200
                focus:border-blue-300
                focus:bg-white
                focus:ring-2
                focus:ring-blue-100
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            />

            <button
              type="button"
              onClick={() =>
                handleDeleteOption(option.id)
              }
              disabled={
                disabled || options.length <= 1
              }
              aria-label={`Delete option ${index + 1}`}
              title={
                options.length <= 1
                  ? "At least one option is required"
                  : "Delete option"
              }
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-lg
                text-slate-400
                transition
                hover:bg-red-50
                hover:text-red-500
                disabled:cursor-not-allowed
                disabled:opacity-30
              "
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>

      {options.length === 0 && (
        <div
          className="
            rounded-xl
            border
            border-dashed
            border-slate-300
            bg-slate-50
            px-4
            py-6
            text-center
          "
        >
          <p className="text-sm font-medium text-slate-600">
            No options added
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Add at least one option for this question.
          </p>
        </div>
      )}
    </div>
  );
};

export default QuestionOptions;