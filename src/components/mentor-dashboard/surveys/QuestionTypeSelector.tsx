import {
  AlignLeft,
  CalendarDays,
  CheckSquare,
  ChevronDown,
  CircleDot,
  Hash,
  Mail,
  MessageSquare,
  Star,
  ToggleLeft,
} from "lucide-react";

import type { SurveyQuestionType } from "@/types/survey";

interface QuestionTypeSelectorProps {
  value: SurveyQuestionType;
  onChange: (value: SurveyQuestionType) => void;
  disabled?: boolean;
}

interface QuestionTypeOption {
  value: SurveyQuestionType;
  label: string;
  description: string;
  icon: React.ElementType;
}

const questionTypes: QuestionTypeOption[] = [
  {
    value: "short_text",
    label: "Short Answer",
    description: "For brief text responses",
    icon: MessageSquare,
  },
  {
    value: "long_text",
    label: "Long Answer",
    description: "For detailed written responses",
    icon: AlignLeft,
  },
  {
    value: "single_select",
    label: "Multiple Choice",
    description: "Allow one option to be selected",
    icon: CircleDot,
  },
  {
    value: "multi_select",
    label: "Checkboxes",
    description: "Allow multiple options to be selected",
    icon: CheckSquare,
  },
  {
    value: "dropdown",
    label: "Dropdown",
    description: "Select one option from a dropdown",
    icon: ChevronDown,
  },
  {
    value: "number",
    label: "Number",
    description: "For numeric responses",
    icon: Hash,
  },
  {
    value: "email",
    label: "Email",
    description: "For email addresses",
    icon: Mail,
  },
  {
    value: "date",
    label: "Date",
    description: "For date responses",
    icon: CalendarDays,
  },
  {
    value: "rating",
    label: "Rating",
    description: "Allow a rating from 1 to 5",
    icon: Star,
  },
  {
    value: "yes_no",
    label: "Yes / No",
    description: "For simple yes or no answers",
    icon: ToggleLeft,
  },
];

const QuestionTypeSelector = ({
  value,
  onChange,
  disabled = false,
}: QuestionTypeSelectorProps) => {
  const selectedType = questionTypes.find(
    (type) => type.value === value
  );

  const SelectedIcon = selectedType?.icon;

  return (
    <div className="w-full">
      <label
        htmlFor="question-type"
        className="
          mb-2
          block
          text-sm
          font-medium
          text-slate-700
        "
      >
        Question Type
      </label>

      <div className="relative">
        <select
          id="question-type"
          value={value}
          disabled={disabled}
          onChange={(event) =>
            onChange(
              event.target.value as SurveyQuestionType
            )
          }
          className="
            w-full
            appearance-none
            rounded-xl
            border
            border-slate-200
            bg-white
            py-3
            pl-11
            pr-10
            text-sm
            font-medium
            text-slate-700
            outline-none
            transition
            hover:border-slate-300
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-100
            disabled:cursor-not-allowed
            disabled:bg-slate-50
            disabled:text-slate-400
          "
        >
          {questionTypes.map((type) => (
            <option
              key={type.value}
              value={type.value}
            >
              {type.label}
            </option>
          ))}
        </select>

        {SelectedIcon && (
          <SelectedIcon
            size={17}
            className="
              pointer-events-none
              absolute
              left-3.5
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />
        )}

        <ChevronDown
          size={17}
          className="
            pointer-events-none
            absolute
            right-3.5
            top-1/2
            -translate-y-1/2
            text-slate-400
          "
        />
      </div>

      {selectedType && (
        <p className="mt-2 text-xs text-slate-400">
          {selectedType.description}
        </p>
      )}
    </div>
  );
};

export default QuestionTypeSelector;