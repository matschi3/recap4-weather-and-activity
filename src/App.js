//import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import ActivityForm from "./components/activityForm/ActivityForm";

function App() {

  const[activities, setActivities]= useState([])
  function handleAddActivities([activites]){
   if(!activites){
    setActivities([newActivity])
   } else {
    setActivities((entries)=>[...activities, newActivity])
   }
   console.log(activities)
  }
  
  function handleSubmitEvent(event){
  event.preventDefault()
  const formData = new FormData(event.target)
  const data= Object.fromEntries(formData)
  const newActivity= {name:String(data.name), goodWeather:Boolean(data.goodWeather)}
  handleAddActivities(newActivity)
  event.target.reset()
  event.target.name.focus()
  }

  return <ActivityForm onAddActivity={handleSubmitEvent} />;
}

export default App;
