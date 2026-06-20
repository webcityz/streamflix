import "./App.css";
import { media } from "./data/media";
import { documentaries} from "./data/docu";
import { releases } from "./data/newReleases";
import MediaRow from "./components/MediaRow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MediaRow title="Trending Now" items={media} />
      <MediaRow title="New Releases" items={releases} />
      <MediaRow title="Documentaries" items={documentaries} />
    </main>
  );
}

export default App;