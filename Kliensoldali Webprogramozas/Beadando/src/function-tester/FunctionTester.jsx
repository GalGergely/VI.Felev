import { Function } from "./Function";
import { PreDeterminedTests } from "./PreDeterminedTests";
import { useState } from "react";
import { Typography, Button, Box, Container } from '@mui/material';

export function FunctionTester({ fn, input, output, tests, onFinish }) {
  console.log(fn);
  console.log(input);
  console.log(output);
  console.log(tests);
  const [testsData, setTestsData] = useState(tests);
  const [achievedPoints, setAchievedPoints] = useState(0);
  const [maxPoints, setMaxPoints] = useState(0);

  const functionBoxStyle = {
    backgroundColor: '#3f51b5',
    padding: '10px',
    borderRadius: '5px',
    color: 'white',
    marginBottom: '20px'
  };

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
        achievedPoints={achievedPoints}
        setAchievedPoints={setAchievedPoints}
        maxPoints={maxPoints}
        setMaxPoints={setMaxPoints}
        fn={fn}
      />
      <Container sx={{ width: '100%', mt: 4 }}>
        <Box display="flex" justifyContent="flex-end">
          <Button variant="text" onClick={() =>
            onFinish({
              givenTests: testsData,
              testResult: { achieved: achievedPoints, all: maxPoints },
              customTests: [],
            })
          }>
            OK
          </Button>
        </Box>
      </Container>
    </div>
  );
}
