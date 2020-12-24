import React from "react";
import { Typography, FormControl, TextField } from "@material-ui/core";

export default function Form() {
  return (
    <div>
      <Typography variant="h3" align="center">
        Form Here
      </Typography>
      <FormControl>
        <TextField id="name" label="name" variant="filled" />
      </FormControl>
    </div>
  );
}
