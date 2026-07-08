import { useState } from "react";

import SettingsHeader from "@/components/admin-dashboard/settings/SettingsHeader";
import SettingsStats from "@/components/admin-dashboard/settings/SettingsStats";
import SettingsTabs from "@/components/admin-dashboard/settings/SettingsTabs";

import GeneralSettings from "@/components/admin-dashboard/settings/GeneralSettings";
import PlatformSettings from "@/components/admin-dashboard/settings/PlatformSettings";
import SecuritySettings from "@/components/admin-dashboard/settings/SecuritySettings";
import EmailSettings from "@/components/admin-dashboard/settings/EmailSettings";
import NotificationSettings from "@/components/admin-dashboard/settings/NotificationSettings";
import PaymentSettings from "@/components/admin-dashboard/settings/PaymentSettings";
import StorageSettings from "@/components/admin-dashboard/settings/StorageSettings";
import IntegrationSettings from "@/components/admin-dashboard/settings/IntegrationSettings";
import BrandingSettings from "@/components/admin-dashboard/settings/BrandingSettings";
import MaintenanceSettings from "@/components/admin-dashboard/settings/MaintenanceSettings";

import SaveChangesDialog from "@/components/admin-dashboard/settings/SaveChangesDialog";
import ResetSettingsDialog from "@/components/admin-dashboard/settings/ResetSettingsDialog";
import EmptySettings from "@/components/admin-dashboard/settings/EmptySettings";

import {
  adminSettings,
  settingsStats,
} from "@/data/admin-settings";

import type {
  AdminSettingsData,
} from "@/types/admin-settings";

export default function AdminSettings() {
  const [settings, setSettings] =
    useState<AdminSettingsData>(
      adminSettings
    );

  const [activeTab, setActiveTab] =
    useState("General");

  const [saveOpen, setSaveOpen] =
    useState(false);

  const [resetOpen, setResetOpen] =
    useState(false);
      const handleSave = () => {
    console.log("Save Settings", settings);

    setSaveOpen(false);
  };

  const handleReset = () => {
    setSettings(adminSettings);

    setResetOpen(false);
  };

  const handleExport = () => {
    console.log("Export Settings");
  };

  return (
    <div className="space-y-8">

      <SettingsHeader
        environment={
          settingsStats.environment
        }
        lastUpdated={
          settingsStats.lastUpdated
        }
        onSave={() =>
          setSaveOpen(true)
        }
        onExport={handleExport}
      />

      <SettingsStats
        totalSettings={
          settingsStats.totalSettings
        }
        configuredModules={
          settingsStats.configuredModules
        }
        activeIntegrations={
          settingsStats.activeIntegrations
        }
        securityScore={
          settingsStats.securityScore
        }
        uptime={settingsStats.uptime}
        lastBackup={
          settingsStats.lastBackup
        }
        lastUpdated={
          settingsStats.lastUpdated
        }
        environment={
          settingsStats.environment
        }
      />

      <SettingsTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
            {activeTab === "General" && (
        <GeneralSettings
          settings={settings.general}
          onChange={(general) =>
            setSettings({
              ...settings,
              general,
            })
          }
        />
      )}

      {activeTab === "Platform" && (
        <PlatformSettings
          settings={settings.general}
          onChange={(general) =>
            setSettings({
              ...settings,
              general,
            })
          }
        />
      )}

      {activeTab === "Security" && (
        <SecuritySettings
          settings={settings.security}
          onChange={(security) =>
            setSettings({
              ...settings,
              security,
            })
          }
        />
      )}
            {activeTab === "Email" && (
        <EmailSettings
          settings={settings.email}
          onChange={(email) =>
            setSettings({
              ...settings,
              email,
            })
          }
        />
      )}

      {activeTab === "Notifications" && (
        <NotificationSettings
          settings={settings.notifications}
          onChange={(notifications) =>
            setSettings({
              ...settings,
              notifications,
            })
          }
        />
      )}

      {activeTab === "Payments" && (
        <PaymentSettings
          settings={settings.payments}
          onChange={(payments) =>
            setSettings({
              ...settings,
              payments,
            })
          }
        />
      )}
            {activeTab === "Storage" && (
        <StorageSettings
          settings={settings.storage}
          onChange={(storage) =>
            setSettings({
              ...settings,
              storage,
            })
          }
        />
      )}

      {activeTab === "Integrations" && (
        <IntegrationSettings
          settings={settings.integrations}
          onChange={(integrations) =>
            setSettings({
              ...settings,
              integrations,
            })
          }
        />
      )}

      {activeTab === "Branding" && (
        <BrandingSettings
          settings={settings.branding}
          onChange={(branding) =>
            setSettings({
              ...settings,
              branding,
            })
          }
        />
      )}
            {activeTab === "Maintenance" && (
        <MaintenanceSettings
          settings={settings.maintenance}
          onChange={(maintenance) =>
            setSettings({
              ...settings,
              maintenance,
            })
          }
        />
      )}

      {![
        "General",
        "Platform",
        "Security",
        "Email",
        "Notifications",
        "Payments",
        "Storage",
        "Integrations",
        "Branding",
        "Maintenance",
      ].includes(activeTab) && (
        <EmptySettings
          onReset={() =>
            setActiveTab("General")
          }
        />
      )}
            <SaveChangesDialog
        open={saveOpen}
        onConfirm={handleSave}
        onOpenChange={setSaveOpen}
      />

      <ResetSettingsDialog
        open={resetOpen}
        onConfirm={handleReset}
        onOpenChange={setResetOpen}
      />
    </div>
  );
}
