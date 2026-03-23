import { useState } from 'react'
import './SettingsTab.css'

export default function SettingsTab() {
  const [settings, setSettings] = useState({
    pushNotif:    true,
    emailDigest:  false,
    twoFactor:    true,
    loginAlerts:  true,
    darkMode:     false,
    autoSave:     true,
  })
  const [saved, setSaved] = useState(false)

  function toggle(key) {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }))
  }

  function handleSave() {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const rows = [
    { key: 'pushNotif',   label: 'Push Notifications', desc: 'Real-time alerts for orders' },
    { key: 'emailDigest', label: 'Email Digest',        desc: 'Weekly summary to your inbox' },
    { key: 'twoFactor',   label: 'Two-Factor Auth',     desc: 'Require a code on every login' },
    { key: 'loginAlerts', label: 'Login Alerts',        desc: 'Notify me of new sign-ins' },
    { key: 'darkMode',    label: 'Dark Mode',           desc: 'Use dark theme across the app' },
    { key: 'autoSave',    label: 'Auto Save',           desc: 'Automatically save form changes' },
  ]

  return (
    <div id="settings">
      <table id="settings-table">
        <tbody>
          {rows.map(row => (
            <tr key={row.key}>
              <td>
                <p className="setting-label">{row.label}</p>
                <p className="setting-desc">{row.desc}</p>
              </td>
              <td>
                {/* checkbox acts as the toggle */}
                <input
                  type="checkbox"
                  checked={settings[row.key]}
                  onChange={() => toggle(row.key)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div id="settings-footer">
        {saved && <span id="saved-msg">✓ Saved!</span>}
        <button id="save-settings-btn" onClick={handleSave}>Save Settings</button>
      </div>
    </div>
  )
}