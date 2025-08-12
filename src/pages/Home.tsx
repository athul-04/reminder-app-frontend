import Login from "../Components/Login";


export default function Home() {
    return (
        <div className="home-container">
            <div className="card">
                <h1>Welcome to Reminder App 📝</h1>
                <Login />
            </div>
        </div>
    );
}
