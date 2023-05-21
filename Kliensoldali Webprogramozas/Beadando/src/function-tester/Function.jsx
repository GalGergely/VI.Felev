import { useState } from "react"
import { Typography } from '@mui/material';

export function Function({func}) {
    //const [funcName, setFuncName] = useState(func);
    return (
        <div>
          <Typography variant="h4" component="h1">
            Function
          </Typography>
          <Typography variant="body1">{func.toString()}</Typography>
        </div>
      );
}