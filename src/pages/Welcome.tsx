import React from "react";
import { Typography, Button } from "@material-ui/core";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import { useHistory } from "react-router-dom";

export default function Welcome() {
  const history = useHistory();
  return (
    <div>
      <Typography variant="h2">Welcome</Typography>
      <Button
        size="large"
        color="primary"
        variant="contained"
        style={{ marginTop: "20px" }}
        startIcon={<SubscriptionsIcon />}
        onClick={() => history.push('/subscribe')}
      >
        Subscribe
      </Button>
    </div>
  );
}
