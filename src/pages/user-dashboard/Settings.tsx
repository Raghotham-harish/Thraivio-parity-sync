import { useMemo, useState } from "react";

import SettingsHeader from "@/components/user-dashboard/settings/SettingsHeader";
import SettingsSidebar from "@/components/user-dashboard/settings/SettingsSidebar";

import AccountSettings from "@/components/user-dashboard/settings/AccountSettings";
import SecuritySettings from "@/components/user-dashboard/settings/SecuritySettings";
import NotificationSettings from "@/components/user-dashboard/settings/NotificationSettings";
import AppearanceSettings from "@/components/user-dashboard/settings/AppearanceSettings";
import PrivacySettings from "@/components/user-dashboard/settings/PrivacySettings";
import ConnectedAccounts from "@/components/user-dashboard/settings/ConnectedAccounts";
import DeviceSessions from "@/components/user-dashboard/settings/DeviceSessions";
import DangerZone from "@/components/user-dashboard/settings/DangerZone";

import ChangePasswordDialog from "@/components/user-dashboard/settings/ChangePasswordDialog";
import DeleteAccountDialog from "@/components/user-dashboard/settings/DeleteAccountDialog";

import { settingsData } from "@/data/settings";

import type {
  AccountSettings as AccountSettingsType,
  AppearanceSettings as AppearanceSettingsType,
  ConnectedAccount,
  DeviceSession,
  NotificationSettings as NotificationSettingsType,
  PrivacySettings as PrivacySettingsType,
  SecuritySettings as SecuritySettingsType,
} from "@/types/settings";

const Settings = () => {
  const [activeTab, setActiveTab] =
    useState("account");

  const [account, setAccount] =
    useState<AccountSettingsType>(
      settingsData.account
    );

  const [security, setSecurity] =
    useState<SecuritySettingsType>(
      settingsData.security
    );

  const [notifications, setNotifications] =
    useState<NotificationSettingsType>(
      settingsData.notifications
    );

  const [appearance, setAppearance] =
    useState<AppearanceSettingsType>(
      settingsData.appearance
    );

  const [privacy, setPrivacy] =
    useState<PrivacySettingsType>(
      settingsData.privacy
    );

  const [accounts, setAccounts] =
    useState<ConnectedAccount[]>(
      settingsData.connectedAccounts
    );

  const [devices, setDevices] =
    useState<DeviceSession[]>(
      settingsData.devices
    );

  const [
    passwordDialogOpen,
    setPasswordDialogOpen,
  ] = useState(false);

  const [
    deleteDialogOpen,
    setDeleteDialogOpen,
  ] = useState(false);

  const [
    passwordForm,
    setPasswordForm,
  ] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [
    deleteForm,
    setDeleteForm,
  ] = useState({
    password: "",
    confirmationText: "",
  });

  const handleAccountChange = (
    field: keyof AccountSettingsType,
    value: string
  ) => {
    setAccount((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSecurityToggle = (
    field: keyof SecuritySettingsType
  ) => {
    setSecurity((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleNotificationToggle = (
    field: keyof NotificationSettingsType
  ) => {
    setNotifications((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleAppearanceChange = (
    field: keyof AppearanceSettingsType,
    value: string | boolean
  ) => {
    setAppearance((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePrivacyToggle = (
    field: keyof PrivacySettingsType
  ) => {
    setPrivacy((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handlePasswordChange = (
    field: string,
    value: string
  ) => {
    setPasswordForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleDeleteChange = (
    field: string,
    value: string
  ) => {
    setDeleteForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleConnect = (
    provider: string
  ) => {
    setAccounts((prev) =>
      prev.map((item) =>
        item.provider === provider
          ? {
              ...item,
              connected: true,
            }
          : item
      )
    );
  };

  const handleDisconnect = (
    provider: string
  ) => {
    setAccounts((prev) =>
      prev.map((item) =>
        item.provider === provider
          ? {
              ...item,
              connected: false,
              email: "",
              lastSynced: undefined,
            }
          : item
      )
    );
  };

  const handleReconnect = (
    provider: string
  ) => {
    setAccounts((prev) =>
      prev.map((item) =>
        item.provider === provider
          ? {
              ...item,
              connected: true,
              lastSynced: "Just now",
            }
          : item
      )
    );
  };

  const handleLogoutDevice = (
    id: string
  ) => {
    setDevices((prev) =>
      prev.filter(
        (device) =>
          device.id !== id
      )
    );
  };

  const handleLogoutAll = () => {
    setDevices((prev) =>
      prev.filter(
        (device) =>
          device.current
      )
    );
  };

  const completion = useMemo(() => {
    let score = 0;

    if (account.fullName) score += 10;
    if (account.email) score += 10;
    if (account.phone) score += 10;
    if (account.location) score += 10;
    if (security.loginAlerts)
      score += 10;
    if (
      security.twoFactorEnabled
    )
      score += 10;
    if (
      accounts.some(
        (item) =>
          item.connected
      )
    )
      score += 20;
    if (
      privacy.profileVisible
    )
      score += 10;
    if (
      notifications.email
    )
      score += 10;

    return score;
  }, [
    account,
    security,
    accounts,
    privacy,
    notifications,
  ]);

  const savePassword = () => {
    setPasswordDialogOpen(false);

    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const deleteAccount = () => {
    setDeleteDialogOpen(false);

    setDeleteForm({
      password: "",
      confirmationText: "",
    });
  };

  const saveSettings = () => {
    console.log({
      account,
      security,
      notifications,
      appearance,
      privacy,
      accounts,
      devices,
    });

    alert(
      "Settings Saved Successfully!"
    );
  };
    return (
    <>
      <div className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-7xl space-y-8 px-6 py-8">

          <SettingsHeader
            completion={completion}
            activeSection={activeTab}
          />

          <div className="grid gap-8 lg:grid-cols-[320px_1fr]">

            <SettingsSidebar
              activeTab={activeTab}
              onChangeTab={setActiveTab}
            />

            <div className="space-y-8">

              {activeTab === "account" && (
                <AccountSettings
                  account={account}
                  onChange={handleAccountChange}
                  onUploadPhoto={() =>
                    alert("Upload Photo")
                  }
                />
              )}

              {activeTab === "security" && (
                <SecuritySettings
                  security={security}
                  onToggle={
                    handleSecurityToggle
                  }
                  onOpenPasswordDialog={() =>
                    setPasswordDialogOpen(
                      true
                    )
                  }
                />
              )}

              {activeTab ===
                "notifications" && (
                <NotificationSettings
                  notifications={
                    notifications
                  }
                  onToggle={
                    handleNotificationToggle
                  }
                />
              )}

              {activeTab ===
                "appearance" && (
                <AppearanceSettings
                  appearance={
                    appearance
                  }
                  onChange={
                    handleAppearanceChange
                  }
                />
              )}

              {activeTab ===
                "privacy" && (
                <PrivacySettings
                  privacy={privacy}
                  onToggle={
                    handlePrivacyToggle
                  }
                />
              )}

              {activeTab ===
                "accounts" && (
                <ConnectedAccounts
                  accounts={accounts}
                  onConnect={
                    handleConnect
                  }
                  onDisconnect={
                    handleDisconnect
                  }
                  onReconnect={
                    handleReconnect
                  }
                />
              )}

              {activeTab ===
                "devices" && (
                <DeviceSessions
                  sessions={devices}
                  onLogoutDevice={
                    handleLogoutDevice
                  }
                  onLogoutAll={
                    handleLogoutAll
                  }
                />
              )}

              {activeTab ===
                "danger" && (
                <DangerZone
                  onExportData={() =>
                    alert(
                      "Export Data"
                    )
                  }
                  onDeactivate={() =>
                    alert(
                      "Account Deactivated"
                    )
                  }
                  onDeleteAccount={() =>
                    setDeleteDialogOpen(
                      true
                    )
                  }
                />
              )}

              {/* Save */}

              <div
                className="
                  flex
                  justify-end

                  border-t
                  border-slate-200

                  pt-6
                "
              >
                <button
                  onClick={saveSettings}
                  className="
                    rounded-xl

                    bg-blue-600

                    px-8
                    py-3.5

                    font-semibold

                    text-white

                    transition

                    hover:bg-blue-700
                  "
                >
                  Save Changes
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Change Password */}

      <ChangePasswordDialog
        open={passwordDialogOpen}
        currentPassword={
          passwordForm.currentPassword
        }
        newPassword={
          passwordForm.newPassword
        }
        confirmPassword={
          passwordForm.confirmPassword
        }
        onClose={() =>
          setPasswordDialogOpen(false)
        }
        onChange={
          handlePasswordChange
        }
        onSave={savePassword}
      />

      {/* Delete Account */}

      <DeleteAccountDialog
        open={deleteDialogOpen}
        password={deleteForm.password}
        confirmationText={
          deleteForm.confirmationText
        }
        onClose={() =>
          setDeleteDialogOpen(false)
        }
        onChange={
          handleDeleteChange
        }
        onDelete={deleteAccount}
      />
    </>
  );
};

export default Settings;