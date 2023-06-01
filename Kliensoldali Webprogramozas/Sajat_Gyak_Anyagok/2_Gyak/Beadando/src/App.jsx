import { FunctionTester } from "./function-tester/FunctionTester";
import json_data from "./stories/example-data/the-simple-example";

function App() {
  return (
    <FunctionTester
      fn={json_data.fn}
      input={json_data.input}
      output={json_data.output}
      tests={json_data.tests}
      onFinish={(result) => console.log(result)}
    />
  );
}

export default App;
