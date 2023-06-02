//import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";
import ActivityForm from "./components/activityForm/ActivityForm";
import List from "./components/list/List";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState([]);
const [weather, setWeather]= useState(null)

useEffect(() => {
  async function fetchData(){
    try{
    const response = await fetch(
      "https://example-apis.vercel.app/api/weather")
      if(response.ok){
        const data= await response.json();
        setWeather(data)
        console.log("It works")
      } else{ console.log("bad response")}
  } catch (error) {
    console.error("Error", error)
  }}
  fetchData()
},[])


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
  }

  return (
    <>
      <fieldset className="activityForm-fieldset">
       {weather === null ? <p>Wetter is jut!</p>:
        weather.isGoodWeather === true ? (
          <p className="headline">Wetter ist jut!</p>
        ) : (
          <p className="headline">Wetter ist bad!</p>
        )}
        <List activities={activities} weather={weather} />
        <ActivityForm onAddActivity={handleAddActivity} />
      </fieldset>
    </>
  );
}

export default App;
