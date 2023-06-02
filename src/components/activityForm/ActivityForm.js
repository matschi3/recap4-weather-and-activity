import "./activityForm.css";

export default function ActivityForm({ onAddActivity }) {
  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddActivity(data);
    event.target.reset();
    event.target.name.focus();
  }
  return (
    <>
      <form className="activityForm" onSubmit={handleFormSubmit}>
        <p>Add new Activity:</p>
        <label htmlFor="name">
          Name: <input type="text" name="name" id="name" />
        </label>

        <label htmlFor="goodWeather">
          Good-weather activity:{" "}
          <input type="checkbox" name="goodWeather" id="goodWeather" />
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
