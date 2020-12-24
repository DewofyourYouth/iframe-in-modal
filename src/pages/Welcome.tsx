import React from "react";
import { Typography, Button } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { useHistory } from "react-router-dom";

export default function Welcome() {
  const history = useHistory();
  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Welcome
      </Typography>
      <Typography variant="body1" gutterBottom>
        Aliqua reprehenderit tempor eiusmod cupidatat excepteur sit occaecat
        esse eu sit non nulla aliqua nulla. Sit sint do ea adipisicing
        reprehenderit. Officia officia aliquip incididunt non mollit incididunt
        laborum amet tempor culpa anim commodo pariatur. Minim ipsum sunt tempor
        fugiat tempor aliquip. Qui laboris cillum minim in ad Lorem. Anim ex
        nisi adipisicing ad minim aliquip et id in ipsum adipisicing cillum.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Click here to continue your journey!!!!
      </Typography>
      <Button
        size="large"
        color="primary"
        variant="contained"
        endIcon={<NavigateNextIcon />}
        onClick={() => history.push("/subscribe")}
      >
        Next
      </Button>
    </div>
  );
}
