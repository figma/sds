import { clsx } from "clsx";
import { Flex } from "layout";
import { ButtonDanger, SwitchField, Text, TextSmall } from "primitives";
import { ComponentPropsWithoutRef, ReactNode, useState } from "react";
import "./settings.css";

// ─── Section label ────────────────────────────────────────────────────────────

type SettingsSectionProps = {
  label: string;
  children: ReactNode;
};
function SettingsSection({ label, children }: SettingsSectionProps) {
  return (
    <div className="settings-section">
      <TextSmall elementType="p" className="settings-section-label">
        {label}
      </TextSmall>
      <div className="settings-card">{children}</div>
    </div>
  );
}

// ─── Row ──────────────────────────────────────────────────────────────────────

type SettingsRowProps = ComponentPropsWithoutRef<"button"> & {
  label: string;
  value?: string;
  /** When true the row renders a disclosure chevron instead of a value */
  chevron?: boolean;
};
function SettingsRow({
  label,
  value,
  chevron = true,
  className,
  ...props
}: SettingsRowProps) {
  return (
    <button className={clsx("settings-row", className)} {...props}>
      <Text elementType="span" className="settings-row-label">
        {label}
      </Text>
      <Flex
        direction="row"
        gap="200"
        alignSecondary="center"
        className="settings-row-trailing"
      >
        {value && (
          <TextSmall elementType="span" className="settings-row-value">
            {value}
          </TextSmall>
        )}
        {chevron && (
          <span aria-hidden="true" className="settings-row-chevron">
            ›
          </span>
        )}
      </Flex>
    </button>
  );
}

// ─── Switch row ───────────────────────────────────────────────────────────────

type SettingsSwitchRowProps = {
  label: string;
  defaultSelected?: boolean;
  onChange?: (isSelected: boolean) => void;
};
function SettingsSwitchRow({
  label,
  defaultSelected = false,
  onChange,
}: SettingsSwitchRowProps) {
  return (
    <SwitchField
      label={label}
      defaultSelected={defaultSelected}
      onChange={onChange}
      className="settings-switch-row"
    />
  );
}

// ─── Settings screen ─────────────────────────────────────────────────────────

export type SettingsProps = {
  /** User display name shown in the Profile row */
  userName?: string;
  /** User email shown in the Email row */
  userEmail?: string;
  /** Called when the user presses Sign Out */
  onSignOut?: () => void;
};

export function Settings({
  userName = "Brett",
  userEmail = "brett@example.com",
  onSignOut,
}: SettingsProps) {
  const [theme, setTheme] = useState<"Light" | "Dark">("Light");
  const [textSize, setTextSize] = useState<"Medium" | "Large">("Medium");

  return (
    <div className="settings-screen">
      {/* Nav */}
      <header className="settings-nav">
        <button className="settings-back-btn" aria-label="Go back">
          {"< Back"}
        </button>
        <Text elementType="h1" className="settings-nav-title">
          Settings
        </Text>
      </header>

      {/* Scrollable content */}
      <div className="settings-content">
        {/* ACCOUNT */}
        <SettingsSection label="ACCOUNT">
          <SettingsRow label="Profile" value={userName} />
          <SettingsRow label="Email" value={userEmail} />
          <SettingsRow label="Password" value="••••••••" />
        </SettingsSection>

        {/* NOTIFICATIONS */}
        <SettingsSection label="NOTIFICATIONS">
          <SettingsSwitchRow label="Push Notifications" defaultSelected />
          <SettingsSwitchRow label="Email Notifications" />
        </SettingsSection>

        {/* APPEARANCE */}
        <SettingsSection label="APPEARANCE">
          <SettingsRow
            label="Theme"
            value={theme}
            onClick={() => setTheme(t => (t === "Light" ? "Dark" : "Light"))}
          />
          <SettingsRow
            label="Text Size"
            value={textSize}
            onClick={() =>
              setTextSize(s => (s === "Medium" ? "Large" : "Medium"))
            }
          />
        </SettingsSection>

        {/* PRIVACY */}
        <SettingsSection label="PRIVACY">
          <SettingsSwitchRow label="Data Sharing" />
          <SettingsSwitchRow label="Analytics" defaultSelected />
        </SettingsSection>

        {/* ABOUT */}
        <SettingsSection label="ABOUT">
          <SettingsRow label="Version" value="2.4.1" chevron={false} />
          <SettingsRow label="Terms of Service" />
          <SettingsRow label="Privacy Policy" />
        </SettingsSection>

        {/* SIGN OUT */}
        <div className="settings-section">
          <ButtonDanger
            variant="danger-subtle"
            className="settings-signout-btn"
            onPress={onSignOut}
          >
            Sign Out
          </ButtonDanger>
        </div>
      </div>
    </div>
  );
}
