import { useState } from 'react'
import './ProfileTab.css'

export default function ProfileTab() {
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState({
    name: 'Ayesha Khan',
    email: 'ayesha@example.com',
    phone: '+1 (555) 000-1234',
    role: 'Senior Engineer',
    location: 'Karachi, Pakistan',
    bio: 'Developer who loves clean code and simple interfaces.',
  })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSave() {
    setEditing(false)
  }

  return (
    <div id="profile">
      <div id="profile-header">
        <div id="avatar">{form.name.charAt(0)}</div>
        <div>
          <h2>{form.name}</h2>
          <p>{form.role} — {form.location}</p>
        </div>
      </div>

      <div id="profile-form">
        <label>Full Name</label>
        <input name="name" value={form.name} onChange={handleChange} disabled={!editing} />

        <label>Email</label>
        <input name="email" value={form.email} onChange={handleChange} disabled={!editing} />

        <label>Phone</label>
        <input name="phone" value={form.phone} onChange={handleChange} disabled={!editing} />

        <label>Job Title</label>
        <input name="role" value={form.role} onChange={handleChange} disabled={!editing} />

        <label>Location</label>
        <input name="location" value={form.location} onChange={handleChange} disabled={!editing} />

        <label>Bio</label>
        <textarea name="bio" value={form.bio} onChange={handleChange} disabled={!editing} rows={3} />
      </div>

      <div id="profile-actions">
        {editing
          ? <>
              <button id="save-btn" onClick={handleSave}>Save</button>
              <button id="cancel-btn" onClick={() => setEditing(false)}>Cancel</button>
            </>
          : <button id="edit-btn" onClick={() => setEditing(true)}>Edit Profile</button>
        }
      </div>
    </div>
  )
}