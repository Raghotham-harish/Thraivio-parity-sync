import {
  BarChart3,
  CheckCircle2,
  ChevronDown,
  LogIn,
  RefreshCw,
  Shuffle,
  ToggleLeft,
} from "lucide-react";

import type { SurveySettings as SurveySettingsType } from "@/types/survey";

interface SurveySettingsProps {
  settings: SurveySettingsType;
  onChange: (settings: SurveySettingsType) => void;
  disabled?: boolean;
}

interface SettingItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const SettingItem = ({
  icon: Icon,
  title,
  description,
  checked,
  onChange,
  disabled = false,
}: SettingItemProps) => {
  return (
    <div
      className="
        flex
        items-start
        justify-between
        gap-4
        rounded-xl
        border
        border-slate-200
        bg-white
        p-4
        transition
        hover:border-slate-300
      "
    >
      <div className="flex min-w-0 items-start gap-3">
        <div
          className={`
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-lg
            ${
              checked
                ? "bg-blue-50 text-blue-600"
                : "bg-slate-50 text-slate-400"
            }
          `}
        >
          <Icon size={18} />
        </div>

        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-700">
            {title}
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-400">
            {description}
          </p>
        </div>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={title}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`
          relative
          mt-1
          h-6
          w-11
          shrink-0
          rounded-full
          transition
          duration-200
          focus:outline-none
          focus:ring-2
          focus:ring-blue-200
          disabled:cursor-not-allowed
          disabled:opacity-50
          ${
            checked
              ? "bg-blue-600"
              : "bg-slate-300"
          }
        `}
      >
        <span
          className={`
            absolute
            top-1
            h-4
            w-4
            rounded-full
            bg-white
            shadow-sm
            transition
            duration-200
            ${
              checked
                ? "left-6"
                : "left-1"
            }
          `}
        />
      </button>
    </div>
  );
};

const SurveySettings = ({
  settings,
  onChange,
  disabled = false,
}: SurveySettingsProps) => {
  const updateSetting = (
    key: keyof SurveySettingsType,
    value: boolean
  ) => {
    onChange({
      ...settings,
      [key]: value,
    });
  };

  return (
    <section className="space-y-4">
      <div>
        <div className="flex items-center gap-2">
          <ToggleLeft
            size={19}
            className="text-blue-600"
          />

          <h3 className="text-base font-semibold text-slate-800">
            Survey Settings
          </h3>
        </div>

        <p className="mt-1 text-sm text-slate-400">
          Control how students can access and complete
          this survey.
        </p>
      </div>

      <div className="space-y-3">
        <SettingItem
          icon={CheckCircle2}
          title="Accept Responses"
          description="Allow students to submit responses to this survey."
          checked={settings.acceptResponses}
          disabled={disabled}
          onChange={(value) =>
            updateSetting(
              "acceptResponses",
              value
            )
          }
        />

        <SettingItem
          icon={LogIn}
          title="Require Login"
          description="Require students to be signed in before submitting a response."
          checked={settings.requireLogin}
          disabled={disabled}
          onChange={(value) =>
            updateSetting(
              "requireLogin",
              value
            )
          }
        />

        <SettingItem
          icon={RefreshCw}
          title="Allow Multiple Submissions"
          description="Allow the same student to submit this survey more than once."
          checked={
            settings.allowMultipleSubmissions
          }
          disabled={disabled}
          onChange={(value) =>
            updateSetting(
              "allowMultipleSubmissions",
              value
            )
          }
        />

        <SettingItem
          icon={BarChart3}
          title="Show Progress Bar"
          description="Show students their progress while completing the survey."
          checked={settings.showProgressBar}
          disabled={disabled}
          onChange={(value) =>
            updateSetting(
              "showProgressBar",
              value
            )
          }
        />

        <SettingItem
          icon={Shuffle}
          title="Shuffle Questions"
          description="Display questions in a different order for each student."
          checked={settings.shuffleQuestions}
          disabled={disabled}
          onChange={(value) =>
            updateSetting(
              "shuffleQuestions",
              value
            )
          }
        />

        <SettingItem
          icon={ChevronDown}
          title="Show Results to Students"
          description="Allow students to view their survey results after submission."
          checked={
            settings.showResultsToStudents
          }
          disabled={disabled}
          onChange={(value) =>
            updateSetting(
              "showResultsToStudents",
              value
            )
          }
        />
      </div>
    </section>
  );
};

export default SurveySettings;