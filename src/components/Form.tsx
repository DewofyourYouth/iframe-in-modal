import React from "react";
import { FormControl, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    padding: "40px",
  },
  textInput: {
    marginRight: "20px",
  },
});

export default function Form() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <FormControl>
        <div>
          <TextField id="name" label="Name" className={classes.textInput} />
          <TextField id="email" label="Email" />
        </div>
      </FormControl>
    </div>
  );
}
