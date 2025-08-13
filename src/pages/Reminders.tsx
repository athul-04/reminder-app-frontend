import React, { useState } from "react";
import "./Reminders.css";

interface Reminder {
  id: number;
  text: string;
  endTime?: string;
  completed: boolean;
}

const Reminders: React.FC = () => {
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: 1, text: "Buy groceries",endTime: "18:00", completed: false },
    { id: 2, text: "Call John", endTime: "18:00", completed: true }
  ]);

  const addReminder = () => {
    const newReminder: Reminder = {
      id: Date.now(),
      text: "New Reminder",
      completed: false
    };
    setReminders([...reminders, newReminder]);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="app-title">
          <img src="/reminder-icon.png" alt="App Logo" className="app-logo" />
          <h2>Reminder App</h2>
        </div>
        <div className="user-info">
          <img
            src="/user-icon.png"
            alt="User"
            className="user-logo"
          />
          <span className="username">John Doe</span>
        </div>
      </header>

      {/* Reminders List */}
      <div className="reminders-list">
        {reminders.map((reminder) => (
          <div
            key={reminder.id}
            className={`reminder-card ${reminder.completed ? "completed" : ""}`}
          >
            <div className="reminder-text">{reminder.text}</div>
            {reminder.completed && <span className="checkmark">✔</span>}
            {reminder.endTime && (
              <div className="hover-time">Ends at: {reminder.endTime}</div>
            )}
          </div>
        ))}
      </div>

      {/* Add Reminder Button */}
      <button className="add-btn" onClick={addReminder}>
        + Add Reminder
      </button>
    </div>
  );
};

export default Reminders;
