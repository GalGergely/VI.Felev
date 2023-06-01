import { Function } from "./Function";
import { PreDeterminedTests } from "./PreDeterminedTests";
import { useEffect, useState } from "react";
import { Typography, Button, Box, Container } from '@mui/material';
import { UniqueTests } from "./UniqueTests";

export function FunctionTester({ fn, input, output, tests, onFinish }) {
  console.log(fn);
  console.log(input);
  console.log(output);
  console.log(tests);
  const [testsData, setTestsData] = useState(tests);
  const [predeterminedAchievedPoints, setPredeterminedAchievedPoints] = useState(0);
  const [predeterminedMaxPoints, setPredeterminedMaxPoints] = useState(0);
  const [uniqueTests, setUniqueTests] = useState([]);
  const [uniqueAchievedPoints, setUniqueAchievedPoints] = useState(0);
  const [uniqueMaxPoints, setUniqueMaxPoints] = useState(0);

  const [achievedPoints, setAchievedPoints] = useState(0);
  const [maxPoints, setMaxPoints] = useState(0);

  const functionBoxStyle = {
    backgroundColor: '#3f51b5',
    padding: '10px',
    borderRadius: '5px',
    color: 'white',
    marginBottom: '20px'
  };
  useEffect(() => {
    setMaxPoints(predeterminedMaxPoints + uniqueMaxPoints);
    setAchievedPoints(predeterminedAchievedPoints + uniqueAchievedPoints);
  },[uniqueAchievedPoints, predeterminedAchievedPoints, uniqueMaxPoints, predeterminedMaxPoints])

  return (
    <div>
      <Box display="flex" justifyContent="center" mb={4}>
        <Typography variant="h2" component="h1" style={functionBoxStyle} fontWeight="bold" fontFamily="Roboto">
          Function Tester
        </Typography>
      </Box>
      <Container sx={{ width: '100%', mt: 4 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h4" component="h2" sx={{ marginRight: '20px' }}>
            Function
          </Typography>
          <Box sx={{ backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '5px', flexGrow: 1 }}>
            <pre>{fn.toString()}</pre>
          </Box>
        </Box>
      </Container>
      <PreDeterminedTests
        testsData={testsData}
        setTestsData={setTestsData}
        achievedPoints={predeterminedAchievedPoints}
        setAchievedPoints={setPredeterminedAchievedPoints}
        maxPoints={predeterminedMaxPoints}
        setMaxPoints={setPredeterminedMaxPoints}
        fn={fn}
      />
      <Container>
      <UniqueTests input={input}
                   output={output}
                   fn={fn}
                   uniqueTests={uniqueTests}
                   setUniqueTests={setUniqueTests}
                   achievedPoints={uniqueAchievedPoints}
                   setAchievedPoints={setUniqueAchievedPoints}
                   maxPoints={uniqueMaxPoints}
                   setMaxPoints={setUniqueMaxPoints}
                   />
      </Container>
      <Container sx={{ width: '100%', mt: 4 }}>
        <Box display="flex" justifyContent="flex-end">
          <Button variant="text" onClick={() =>
            onFinish({
              givenTests: testsData,
              testResult: { achieved: achievedPoints, all: maxPoints },
              customTests: uniqueTests,
            })
          }>
            OK
          </Button>
        </Box>
      </Container>
    </div>
  );
}
