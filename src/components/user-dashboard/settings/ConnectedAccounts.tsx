import {
  Link2,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";

import {
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaMicrosoft,
  FaApple,
} from "react-icons/fa6";

import type {
  ConnectedAccount,
} from "@/types/settings";

interface ConnectedAccountsProps {
  accounts: ConnectedAccount[];

  onConnect: (
    provider: string
  ) => void;

  onDisconnect: (
    provider: string
  ) => void;

  onReconnect: (
    provider: string
  ) => void;
}

const ConnectedAccounts = ({
  accounts,
  onConnect,
  onDisconnect,
  onReconnect,
}: ConnectedAccountsProps) => {
  return (
    <div
      className="
        rounded-[32px]

        border
        border-slate-200

        bg-white

        p-8
      "
    >
      {/* Header */}

      <div
        className="
          flex
          flex-col

          gap-6

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div>

          <div
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-blue-50

              px-4
              py-2

              text-sm
              font-medium

              text-blue-700
            "
          >
            <Link2 size={16} />

            Connected Accounts
          </div>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Linked Services
          </h2>

          <p
            className="
              mt-3

              max-w-2xl

              text-slate-500
            "
          >
            Connect your professional
            accounts to sign in faster,
            sync achievements and improve
            your CoachCoaching profile.
          </p>

        </div>

        <div
          className="
            flex
            h-20
            w-20

            items-center
            justify-center

            rounded-[28px]

            bg-blue-50
          "
        >
          <ShieldCheck
            size={34}
            className="
              text-blue-600
            "
          />
        </div>

      </div>

      {/* Connected Accounts */}

      <div
        className="
          mt-10

          space-y-6
        "
      >
                {accounts
          .filter((account) =>
            ["google", "github", "linkedin"].includes(
              account.provider
            )
          )
          .map((account) => {
            const provider = account.provider;

            const Icon =
              provider === "google"
                ? FaGoogle
                : provider === "github"
                ? FaGithub
                : FaLinkedin;

            const iconBg =
              provider === "google"
                ? "bg-red-50 text-red-600"
                : provider === "github"
                ? "bg-slate-100 text-slate-800"
                : "bg-blue-50 text-blue-600";

            return (
              <div
                key={provider}
                className="
                  rounded-3xl

                  border
                  border-slate-200

                  p-6

                  transition-all

                  hover:border-blue-200
                  hover:shadow-lg
                "
              >
                <div
                  className="
                    flex
                    flex-col

                    gap-6

                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                  "
                >
                  {/* Left */}

                  <div
                    className="
                      flex
                      gap-5

                      flex-1
                    "
                  >
                    <div
                      className={`
                        flex
                        h-16
                        w-16

                        shrink-0

                        items-center
                        justify-center

                        rounded-3xl

                        ${iconBg}
                      `}
                    >
                      <Icon size={28} />
                    </div>

                    <div className="flex-1">

                      <h3
                        className="
                          text-2xl
                          font-bold
                        "
                      >
                        {provider
                          .charAt(0)
                          .toUpperCase() +
                          provider.slice(1)}
                      </h3>

                      <p
                        className="
                          mt-2

                          text-slate-500
                        "
                      >
                        {account.email ||
                          `Connect your ${provider} account.`}
                      </p>

                      <div
                        className="
                          mt-5

                          flex
                          flex-wrap

                          gap-3
                        "
                      >
                        <div
                          className={`
                            inline-flex
                            items-center
                            gap-2

                            rounded-full

                            px-4
                            py-2

                            text-sm
                            font-medium

                            ${
                              account.connected
                                ? "bg-green-100 text-green-700"
                                : "bg-slate-100 text-slate-600"
                            }
                          `}
                        >
                          <ShieldCheck size={15} />

                          {account.connected
                            ? "Connected"
                            : "Not Connected"}
                        </div>

                        {account.lastSynced && (
                          <div
                            className="
                              inline-flex
                              items-center
                              gap-2

                              rounded-full

                              bg-blue-50

                              px-4
                              py-2

                              text-sm
                              font-medium

                              text-blue-700
                            "
                          >
                            <RefreshCw size={15} />

                            Last Sync :
                            {account.lastSynced}
                          </div>
                        )}
                      </div>

                    </div>
                  </div>

                  {/* Right */}

                  <div
                    className="
                      flex

                      lg:flex-col

                      gap-3

                      shrink-0
                    "
                  >
                    {account.connected ? (
                      <>
                        <button
                          onClick={() =>
                            onReconnect(
                              provider
                            )
                          }
                          className="
                            inline-flex
                            items-center
                            justify-center
                            gap-2

                            rounded-xl

                            border
                            border-slate-200

                            px-5
                            py-3

                            font-medium

                            transition

                            hover:bg-blue-50
                          "
                        >
                          <RefreshCw size={16} />

                          Reconnect
                        </button>

                        <button
                          onClick={() =>
                            onDisconnect(
                              provider
                            )
                          }
                          className="
                            rounded-xl

                            border
                            border-red-200

                            px-5
                            py-3

                            font-medium

                            text-red-600

                            transition

                            hover:bg-red-50
                          "
                        >
                          Disconnect
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() =>
                          onConnect(
                            provider
                          )
                        }
                        className="
                          rounded-xl

                          bg-blue-600

                          px-6
                          py-3

                          font-medium

                          text-white

                          transition

                          hover:bg-blue-700
                        "
                      >
                        Connect
                      </button>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
                  {/* Apple & Microsoft Accounts */}

        {accounts
          .filter((account) =>
            ["apple", "microsoft"].includes(
              account.provider
            )
          )
          .map((account) => {
            const provider = account.provider;

            const Icon =
              provider === "apple"
                ? FaApple
                : FaMicrosoft;

            const iconBg =
              provider === "apple"
                ? "bg-slate-900 text-white"
                : "bg-sky-50 text-sky-600";

            return (
              <div
                key={provider}
                className="
                  rounded-3xl

                  border
                  border-slate-200

                  p-6

                  transition-all

                  hover:border-blue-200
                  hover:shadow-lg
                "
              >
                <div
                  className="
                    flex
                    flex-col

                    gap-6

                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                  "
                >
                  {/* Left */}

                  <div
                    className="
                      flex
                      gap-5

                      flex-1
                    "
                  >
                    <div
                      className={`
                        flex
                        h-16
                        w-16

                        items-center
                        justify-center

                        rounded-3xl

                        ${iconBg}
                      `}
                    >
                      <Icon size={28} />
                    </div>

                    <div>
                      <h3
                        className="
                          text-2xl
                          font-bold
                        "
                      >
                        {provider === "apple"
                          ? "Apple ID"
                          : "Microsoft"}
                      </h3>

                      <p
                        className="
                          mt-2

                          text-slate-500
                        "
                      >
                        {account.email ||
                          `Connect your ${provider} account for secure authentication.`}
                      </p>

                      <div
                        className="
                          mt-5

                          inline-flex
                          items-center
                          gap-2

                          rounded-full

                          bg-slate-100

                          px-4
                          py-2

                          text-sm
                          font-medium
                        "
                      >
                        <ShieldCheck
                          size={15}
                        />

                        {account.connected
                          ? "Connected"
                          : "Not Connected"}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}

                  <div
                    className="
                      flex

                      lg:flex-col

                      gap-3
                    "
                  >
                    {account.connected ? (
                      <>
                        <button
                          onClick={() =>
                            onReconnect(
                              provider
                            )
                          }
                          className="
                            rounded-xl

                            border
                            border-slate-200

                            px-5
                            py-3

                            font-medium

                            transition

                            hover:bg-slate-50
                          "
                        >
                          Reconnect
                        </button>

                        <button
                          onClick={() =>
                            onDisconnect(
                              provider
                            )
                          }
                          className="
                            rounded-xl

                            border
                            border-red-200

                            px-5
                            py-3

                            font-medium

                            text-red-600

                            transition

                            hover:bg-red-50
                          "
                        >
                          Disconnect
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() =>
                          onConnect(
                            provider
                          )
                        }
                        className="
                          rounded-xl

                          bg-blue-600

                          px-6
                          py-3

                          font-medium

                          text-white

                          transition

                          hover:bg-blue-700
                        "
                      >
                        Connect
                      </button>
                    )}
                  </div>

                </div>
              </div>
            );
          })}

      {/* Connect New Account */}

      <div
        className="
          mt-10

          rounded-[32px]

          border-2
          border-dashed
          border-blue-200

          bg-blue-50/50

          p-8

          text-center
        "
      >
        <div
          className="
            mx-auto

            flex
            h-20
            w-20

            items-center
            justify-center

            rounded-3xl

            bg-blue-100
          "
        >
          <Link2
            size={36}
            className="
              text-blue-600
            "
          />
        </div>

        <h3
          className="
            mt-6

            text-2xl
            font-bold
          "
        >
          Connect More Accounts
        </h3>

        <p
          className="
            mx-auto
            mt-3

            max-w-2xl

            text-slate-500
          "
        >
          Link multiple providers to make
          sign in easier, improve account
          recovery and securely sync your
          CoachCoaching profile.
        </p>

        <button
          className="
            mt-8

            rounded-xl

            bg-blue-600

            px-7
            py-3.5

            font-medium

            text-white

            transition

            hover:bg-blue-700
          "
        >
          Connect Another Account
        </button>
      </div>

      {/* Security Summary */}

      <div
        className="
          mt-10

          rounded-3xl

          bg-gradient-to-r
          from-blue-600
          to-indigo-600

          p-8

          text-white
        "
      >
        <div
          className="
            flex
            flex-col

            gap-5

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div>
            <h3
              className="
                text-2xl
                font-bold
              "
            >
              Secure Sign-in
            </h3>

            <p
              className="
                mt-3

                max-w-2xl

                text-blue-100
              "
            >
              Connected accounts provide
              faster authentication,
              stronger account recovery and
              additional security for your
              CoachCoaching profile.
            </p>
          </div>

          <div
            className="
              rounded-2xl

              bg-white/10

              px-6
              py-5

              backdrop-blur
            "
          >
            <div
              className="
                text-sm
                text-blue-100
              "
            >
              Connected Accounts
            </div>

            <div
              className="
                mt-2

                text-4xl
                font-bold
              "
            >
              {
                accounts.filter(
                  (item) =>
                    item.connected
                ).length
              }
            </div>
          </div>
        </div>
      </div>
      </div>
            {/* Footer */}

      <div
        className="
          mt-10

          flex
          flex-col

          gap-5

          border-t
          border-slate-200

          pt-6

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        {/* Left */}

        <div>
          <h4
            className="
              font-semibold
            "
          >
            Connected Identity
          </h4>

          <p
            className="
              mt-2

              max-w-2xl

              text-sm

              text-slate-500
            "
          >
            Connected accounts make signing
            in easier, improve account
            recovery and help securely sync
            your profile, certificates and
            learning progress across all
            your devices.
          </p>
        </div>

        {/* Right */}

        <div
          className="
            flex
            flex-wrap

            items-center

            gap-3
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-green-50

              px-4
              py-2

              text-sm
              font-medium

              text-green-700
            "
          >
            <ShieldCheck size={16} />

            Secure Login
          </div>

          <div
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-blue-50

              px-4
              py-2

              text-sm
              font-medium

              text-blue-700
            "
          >
            <RefreshCw size={16} />

            Auto Sync Ready
          </div>

          <div
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-violet-50

              px-4
              py-2

              text-sm
              font-medium

              text-violet-700
            "
          >
            <Link2 size={16} />

            {
              accounts.filter(
                (item) => item.connected
              ).length
            }
            {" "}Connected
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectedAccounts;