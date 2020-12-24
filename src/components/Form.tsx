import React from "react";
import { Typography, FormControl, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  textInput: {
    marginRight: "20px",
  },
});

export default function Form() {
  const classes = useStyles();
  return (
    <div style={{ padding: "40px" }}>
      <Typography variant="h3" align="center">
        Form Here
      </Typography>
      <FormControl>
        <div>
          <TextField id="name" label="Name" className={classes.textInput} />
          <TextField id="email" label="Email" />
        </div>
      </FormControl>
    </div>
  );
}
