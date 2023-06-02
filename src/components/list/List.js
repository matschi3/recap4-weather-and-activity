import "./list.css";

export default function List({ activities }) {
  console.log(activities);
  return (
    <section className="listSection">
      {activities.map((activity) => {
        return (
          <article key={activity.id} className="listSection__article">
            {activity.name}
          </article>
        );
      })}
    </section>
  );
}
