import { useState } from 'react'
import ProfileTab from './tabs/ProfileTab'
import OrdersTab from './tabs/OrdersTab'
import SettingsTab from './tabs/SettingsTab'
import './App.css'

const TABS = ['Profile', 'Orders', 'Settings']

export default function App() {
  const [activeTab, setActiveTab] = useState('Profile')

  return (
    <div id="dashboard">
      <h1>Dashboard</h1>

      {/* tab buttons — state controls which one is active */}
      <div id="tabs">
        {TABS.map(tab => (
          <button
            key={tab}
            className={activeTab === tab ? 'tab active' : 'tab'}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div id="content">
        {activeTab === 'Profile'  && <ProfileTab />}
        {activeTab === 'Orders'   && <OrdersTab />}
        {activeTab === 'Settings' && <SettingsTab />}
      </div>
    </div>
  )
}