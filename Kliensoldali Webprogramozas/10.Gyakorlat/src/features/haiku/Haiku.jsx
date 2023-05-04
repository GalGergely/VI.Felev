import { Editor } from "./Editor";
import { HaikuList } from "./Haikus";

export function Haiku () {
  return (
    <div>
      <h1>Haiku editor</h1>
      <Editor />
      <HaikuList />
    </div>
  );
};
