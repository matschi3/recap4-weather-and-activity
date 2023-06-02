//import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import ActivityForm from "./components/activityForm/ActivityForm";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(data) {
    const newActivity = {
      id: uid(),
      name: String(data.name),
      goodWeather: Boolean(data.goodWeather),
    };

    if (!activities) {
      setActivities([newActivity]);
    } else {
      setActivities((activities) => [...activities, newActivity]);
    }
    console.log(activities);
  }

  return <ActivityForm onAddActivity={handleAddActivity} />;
}

export default App;
