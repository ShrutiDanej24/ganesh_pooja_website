import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import packages from "../../data/packages";
import "./booking.css";

const cities = ["Pune", "Mumbai", "Bengaluru", "Hyderabad", "Delhi", "Chennai"];

const makeSlots = (date) => {
  // simple demo slots; disable past day
  const base = [
    "07:30 AM",
    "09:00 AM",
    "10:30 AM",
    "12:00 PM",
    "02:30 PM",
    "04:00 PM",
    "06:00 PM",
  ];
  if (!date) return base;
  const selected = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selected < today ? [] : base;
};

export default function BookingPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    city: "Pune",
    packageId: packages[0]?.id || "",
    date: "",
    slot: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  });

  const slots = useMemo(() => makeSlots(form.date), [form.date]);
  const selectedPkg = useMemo(
    () => packages.find((p) => p.id === form.packageId),
    [form.packageId]
  );

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (
      !form.packageId ||
      !form.date ||
      !form.slot ||
      !form.name ||
      !form.phone
    ) {
      alert("Please complete required fields (puja, date, slot, name, phone).");
      return;
    }
    // demo confirmation
    alert(
      `Booked!\n\n${selectedPkg?.title}\n${form.city} • ${form.date} • ${form.slot}\nName: ${form.name}\nPhone: ${form.phone}`
    );
    navigate("/"); // go home after fake booking
  };

  return (
    <section className="booking-page">
      <div className="container booking-wrap">
        <div className="booking-main">
          <h1 className="booking-title"></h1>

          <form onSubmit={submit} className="booking-form">
            {/* Location & Puja */}
            <div className="form-row">
              <label>
                City<span className="req">*</span>
                <select value={form.city} onChange={set("city")}>
                  {cities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Select Puja<span className="req">*</span>
                <select value={form.packageId} onChange={set("packageId")}>
                  {packages.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {/* Date & Slot */}
            <div className="form-row">
              <label>
                Date<span className="req">*</span>
                <input
                  type="date"
                  value={form.date}
                  min={new Date().toISOString().split("T")[0]} // ⬅ ensures today or future
                  onChange={set("date")}
                />
              </label>

              <label>
                Time Slot<span className="req">*</span>
                <div className="slots">
                  {slots.length === 0 && (
                    <span className="slot-empty">
                      No slots for the selected day.
                    </span>
                  )}
                  {slots.map((s) => (
                    <button
                      type="button"
                      key={s}
                      className={`slot ${form.slot === s ? "active" : ""}`}
                      onClick={() => setForm((f) => ({ ...f, slot: s }))}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </label>
            </div>

            {/* Contact */}
            <div className="form-row">
              <label>
                Full Name<span className="req">*</span>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={set("name")}
                />
              </label>

              <label>
                Phone<span className="req">*</span>
                <input
                  type="tel"
                  placeholder="10-digit mobile"
                  value={form.phone}
                  onChange={set("phone")}
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                Email
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={set("email")}
                />
              </label>

              <label>
                Address (optional)
                <input
                  type="text"
                  placeholder="Flat, Street, Area"
                  value={form.address}
                  onChange={set("address")}
                />
              </label>
            </div>

            <label>
              Notes (optional)
              <textarea
                rows={3}
                placeholder="Any samagri preferences, language, gotra, etc."
                value={form.notes}
                onChange={set("notes")}
              />
            </label>

            <div className="form-actions">
              <button
                type="button"
                className="btn ghost"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
              <button type="submit" className="btn primary">
                Confirm Booking
              </button>
            </div>
          </form>
        </div>

        {/* Summary */}
      </div>
    </section>
  );
}
