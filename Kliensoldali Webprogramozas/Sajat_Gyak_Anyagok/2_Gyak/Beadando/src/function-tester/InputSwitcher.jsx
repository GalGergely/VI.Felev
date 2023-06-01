import { Switch, TextField, Typography } from "@mui/material";
import { useState } from "react";

export function InputSwitcher({inputType, inputKey, handleChange}) {
    const [type, setType] = useState(inputType);

    if (typeof type === "number") {
        return(<TextField
              label={inputKey}
              type='number'
              variant="outlined"
              fullWidth
              value={inputType}
              onChange={(e) => handleChange(parseInt(e.target.value), inputKey)}
            />);
    } else if(typeof type === "string"){
        return(<TextField
              label={inputKey}
              variant="outlined"
              fullWidth
              value={inputType}
              onChange={(e) => handleChange(e.target.value, inputKey)}
            />);
    } else if(typeof type === "boolean"){
        return(
        <>
        <Typography variant="h6" style={{paddingRight:"1em"}}>{inputKey}:</Typography>
        <Switch
              label={inputKey}
              variant="outlined"
              value={inputType}
              onChange={(e) => handleChange(e.target.checked, inputKey)}
            /></>);
    } else {
        return(<TextField
              label="arrays are not impelemented"
              variant="outlined"
              fullWidth
            />);
    }
    //else if(Array.isArray(type)) {
    //    for (let i = 0; i < type.length; i++) {
    //        return(InputSwitcher({inputType: type[i], inputKey: inputKey, handleChange: handleChange}));
    //        asdf(type[i], inputKey, handleChange)
    //    }
    //}
}