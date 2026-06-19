import "./App.css";
import { media } from "./data/media";
import { documentaries} from "./data/docu";
import { releases } from "./data/newReleases";
import MediaRow from "./components/MediaRow";

function App() {
  return (
    <main>
      <h1>StreamFlix</h1>
      <MediaRow title="Trending Now" items={media} />
      <MediaRow title="New Releases" items={releases} />
      <MediaRow title="Documentaries" items={documentaries} />
    </main>
  );
}

export default App;