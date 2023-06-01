import React, { useState, useEffect } from "react";
import { Grid, Card, Box, Typography, CardContent, Button, TextField} from "@mui/material";
import { InputSwitcher } from "./InputSwitcher";
import { PreDeterminedTests } from "./PreDeterminedTests";

const handleInput = (input) => {
    Object.entries(input).map(([key, value]) => {
        input[key] = handle(value);
    });
    return input;
};

const handle = (value) => {
    let initialValue = undefined;
    if(Array.isArray(value)) {
        initialValue = [];
    } else if(value=="number" || typeof value === "number") {
        initialValue = 0;
    } else if(value=="string" || typeof value === "string") {
        initialValue = "";
    } else if(value=="boolean" || typeof value === "boolean") {
        initialValue = false;
    }
    return initialValue;
}

export function UniqueTests({ input, output, uniqueTests, setUniqueTests, fn, achievedPoints, setAchievedPoints, maxPoints, setMaxPoints }) {
  const [inputs, setInputs] = useState(handleInput(input));
  const [op, setOp] = useState(handle(output));
  const [name, setName] = useState("");
  const [point, setPoint] = useState(0);
  const [isEdited, setIsEdited] = useState(false);
  const [editedIndex, setEditedIndex] = useState(-1);
  const [errorList, setErrorList] = useState([]);

  const handleChange = (e, key) => {
    setInputs({ ...inputs, [key]: e});
  };

  const validate = () => {
    let errorList = [];
    if (!name) {
        errorList.push("Test name cannot be empty.");
    }

    if (point < 0 || point > 100 || point % 1 !== 0) {
        errorList.push("Points must be a whole number between 0 and 100.");
    }

    Object.entries(inputs).map(([key, value]) => {
        console.log(key + " " + value);
        if(value === undefined || value === null || value === "" || Number.isNaN(value)) {
            errorList.push("All inputs must be filled.");
        }
    });

    setErrorList(errorList);
    return errorList.length === 0;
  }

  const add = () => {
    if (!validate()) {
        return;
    }

    let newTest = {};
    newTest["output"] = op;
    newTest["name"] = name;
    newTest["points"] = point;
    newTest["testFn"] = () => fn(JSON.parse(JSON.stringify(inputs))) === JSON.parse(JSON.stringify(op));
    newTest["parameters"] = JSON.parse(JSON.stringify(inputs));
    setUniqueTests([...uniqueTests, newTest]);
  }
  
  const addButtonFunction = () => {
    if(isEdited) {
      addAfterEdit();
    } else {
      add();
    }
  }
  
  const onEdit = (index) => {
    if(uniqueTests.length > 0) {
    console.log("edit" + JSON.stringify(uniqueTests[index]));
    setName(uniqueTests[index].name);
    setPoint(uniqueTests[index].points);
    setInputs(uniqueTests[index].parameters);
    setOp(uniqueTests[index].output);
    }
  }
  
  const addAfterEdit = () => {
    if (!validate()) {
        return;
    }

    let tempTests = uniqueTests;
    tempTests[editedIndex].output = op;
    tempTests[editedIndex].name = name;
    tempTests[editedIndex].points = point;
    tempTests[editedIndex].testFn = () => fn(JSON.parse(JSON.stringify(inputs))) === JSON.parse(JSON.stringify(op));
    tempTests[editedIndex].parameters = JSON.parse(JSON.stringify(inputs));
    tempTests[editedIndex].status = undefined;
    setUniqueTests(tempTests);
    setIsEdited(false);
  }

  useEffect(() => {
    onEdit(editedIndex);
  }, [editedIndex]);
  
  return (
    <>
    <Card style={{paddingLeft:"1em"}} sx={{ maxWidth: '100%', mb: 2}}>
     <CardContent>
      <Typography variant="h4">Add Unique Test</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1em', padding: '1em' }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField id="test-name" label="Test Name" variant="outlined" fullWidth onChange={(e) => setName(e.target.value)} value={name}/>
        </Grid>
        <Grid item xs={6}>
          <TextField type="number" id="test-points" label="Test Points" variant="outlined" value={point} fullWidth onChange={(e) => setPoint(parseInt(e.target.value))} />
        </Grid>
      </Grid>
      {Object.entries(inputs).map(([key, value]) => (
        <div key={key} style={{ display: 'flex', alignItems: 'center', paddingBottom:"1em"}}>
            <InputSwitcher inputType={value} inputKey={key} handleChange={(event) => handleChange(event, key)} />
        </div>
      ))}
      <div style={{ display: 'flex', alignItems: 'center', paddingBottom:"1em"}}>
            <InputSwitcher inputType={op} inputKey={"output"} handleChange={(event) => setOp(event)} />
      </div>
      </Box>
      
      <Card>
            <Typography variant="h6">Error List</Typography>
            {
                errorList.map((error, index) => (
                    <Typography key={index} variant="body1" color="error">{error}</Typography>
                ))
            }
      </Card>
      <Button variant="text"  onClick={addButtonFunction}>
            {isEdited ? "Edit" : "Add"}
          </Button>
      </CardContent>
    </Card>
    <PreDeterminedTests
    testsData={uniqueTests}
    setTestsData={setUniqueTests}
    achievedPoints={achievedPoints}
    setAchievedPoints={setAchievedPoints}
    maxPoints={maxPoints}
    setMaxPoints={setMaxPoints}
    isUniqeTest={true}
    onEdit={onEdit}
    fn={fn}
    setEditedIndex={setEditedIndex}
    setIsEdited={setIsEdited}
  />
  </>
  );
}
