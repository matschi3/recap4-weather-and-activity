import "./list.css";

export default function List({ activities, isGoodWeather }) {
  console.log(activities);
  return (
    <section className="listSection">
      {activities
        .filter((activity) => activity.goodWeather === isGoodWeather)
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
