
import { useState } from "react";

export default function MediaCard({ item }) {
  const [saved, setSaved] = useState(false);

  return (
    <article className="media-card">
      <img src={item.image} alt={`${item.title} poster`} />
      <h3>{item.title}</h3>
      <button
        type="button"
        aria-pressed={saved}
        onClick={() => setSaved((current) => !current)}
      >
        {saved ? "✓ In My List" : "+ My List"}
      </button>
    </article>
  );
}
