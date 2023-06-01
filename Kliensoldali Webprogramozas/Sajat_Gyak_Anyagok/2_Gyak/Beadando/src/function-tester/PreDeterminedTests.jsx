import { useEffect, useState } from "react";
import { Test } from "./Test";
import zIndex from "@mui/material/styles/zIndex";
import { Container, Typography, Button, Box, LinearProgress} from '@mui/material';

export function PreDeterminedTests({testsData, setTestsData, achievedPoints, setAchievedPoints,maxPoints, setMaxPoints, fn, isUniqeTest, onEdit, setEditedIndex, setIsEdited}) {
    const checkResults = (td) => {
        setMaxPoints(td.reduce((acc, e) => acc + e.points, 0));
        setAchievedPoints(td.reduce((acc, e) => e.status === 1 ? acc + e.points : acc, 0));
    };

    useEffect(() => {
        let testsWithStatus = [];
        for (let i = 0; i < testsData.length; i++) {
            testsWithStatus.push({name: testsData[i].name, points: testsData[i].points, testFn: testsData[i].testFn, status: testsData[i].status});
        }
        setTestsData([...testsWithStatus]);
        checkResults([...testsWithStatus]);
    }, []);

    const onRun = (index) => {
        testsData[index].status = testsData[index].testFn(fn) ? 1 : 2;
        setTestsData([...testsData]);
        checkResults([...testsData]);
    }
    const onDelete = (index) => {
        setTestsData(testsData.filter((test, i) => i !== index));
        checkResults(testsData.filter((test, i) => i !== index));
    }

    const runAllTests = () => {
        testsData.map((test, index) => onRun(index));
    }
    return (
        <Container sx={{ width: '100%', mt: 4 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h4" component="h1">
                    {isUniqeTest ? "Unique Tests" : "Pre Determined Tests"}
                </Typography>
                <Box flexGrow={1} mx={2}>
                    <LinearProgress variant="determinate" value={achievedPoints/maxPoints*100} />
                    <Box display="flex" justifyContent="space-between" mt={1}>
                        <Typography variant="body2">{achievedPoints} / {maxPoints}</Typography>
                    </Box>
                </Box>
                <Button variant="contained" color="primary" onClick={runAllTests}>
                    Run All
                </Button>
            </Box>
            <Box>
                {testsData.map((test, index) => (
                    <Test
                        name={test.name}
                        points={test.points}
                        onRun={() => onRun(index)}
                        onDelete={() => onDelete(index)}
                        key={index}
                        index={index}
                        isUniqeTest={isUniqeTest}
                        setEditedIndex={setEditedIndex}
                        status={test.status}
                        setIsEdited={setIsEdited}
                    />
                ))}
            </Box>
        </Container>
    );
}