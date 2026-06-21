import { useState } from "react";

export default function MediaCard({ item }) {
  const [saved, setSaved] = useState(false);

  function handleSavedToggle() {
    setSaved((current) => !current);
  }

  return (
    <article className="media-card">
      <img
        src={item.image}
        alt={`${item.title} poster`}
      />

      <h3>{item.title}</h3>

      <p>
        {item.genre} · {item.year}
      </p>

      <button
        type="button"
        className="my-list-button"
        aria-pressed={saved}
        onClick={handleSavedToggle}
      >
        {saved ? "✓ In My List" : "+ My List"}
      </button>
    </article>
  );
}