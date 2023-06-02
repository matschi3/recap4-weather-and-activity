import "./activityForm.css";

export default function ActivityForm({ onAddActivity }) {
  return (
    <>
      <form>
        <fieldset className="activityForm-fieldset">
          <p>Add new Activity:</p>
          <label htmlFor="name">
            Name: <input type="text" name="name" id="name" />
          </label>

          <label htmlFor="goodWeather">
            Good-weather activity:{" "}
            <input type="checkbox" name="goodWeather" id="goodWeather" />
          </label>

          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </>
  );
}
