import Card from "./Card";
import AddReminder from "./AddReminder";
import "./PageContent.css";

function PageContent(){
    return (
        <div className="reminders-list">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <AddReminder />
        </div>
    );
}

export default PageContent;