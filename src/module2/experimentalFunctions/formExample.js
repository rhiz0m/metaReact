import { useState } from "react"

export default function Form() {
  const [form, setForm] = useState({
    firstName: "your first name",
    lastName: "your last name",
    email: "your email",
  })

  return (
    <div>
      <label>
        Firstname:
        <input
          value={form.firstName}
          onChange={(e) => {
            setForm({ ...form, firstName: e.target.value })
          }}
        />
      </label>
      <label>
        Lastname:
        <input
          value={form.lastName}
          onChange={(e) => {
            setForm({ ...form, lastName: e.target.value })
          }}
        />
      </label>
      <label>
        Email:
        <input
          value={form.email}
          onChange={(e) => {
            setForm({ ...form, email: e.target.value })
          }}
        />
      </label>
    </div>
  )
}
