import "./list.css";

export default function List({ activities, weather }) {
  return (
    <section className="listSection">
      {activities
        .filter((activity) => activity.goodWeather === weather.isGoodWeather)
        .map((activity) => {
          return (
            <article key={activity.id} className="listSection__article">
              {activity.name}
            </article>
          );
        })}
    </section>
  );
}
