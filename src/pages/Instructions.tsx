import { useParams } from "react-router-dom";
import "./Instructions.css"; // Import CSS file
import { useNavigate } from "react-router-dom";

function Instructions() {
  const navigate = useNavigate();
  const { uid } = useParams<{ uid: string }>();
  console.log("UID from params:", uid);

  const BOT_USERNAME = "Reminder_botFather_bot";
  const telegramLink = `https://t.me/${BOT_USERNAME}?start=${encodeURIComponent(uid || "")}`;

  return (
    <div className="instructions-container">
      <div className="instructions-card">
        <h1>📌 Instructions</h1>
        <p>
          Follow these steps to link your <strong>Telegram</strong> account with Reminder App.
        </p>

        {uid ? (
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="telegram-button"
            onClick={()=>navigate(`/reminders/${uid}`)}   
          >
            👉 Link Your Telegram
          </a>
        ) : (
          <p className="error-message">❌ No UID found. Please sign in again.</p>
        )}

        <div className="extra-info">
          <p>After clicking, Telegram will open and ask you to start the bot.</p>
          <p>That’s it — you’re connected! 🎉</p>
        </div>
      </div>
    </div>
  );
}

export default Instructions;
