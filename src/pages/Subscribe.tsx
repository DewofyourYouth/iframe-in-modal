import React, { useState } from "react";
import { Typography, Button } from "@material-ui/core";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import IFrameContainer from "components/IFrame";

export default function Subscribe() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Subscribe to our channel
      </Typography>
      <Button
        size="large"
        color="primary"
        variant="contained"
        startIcon={<SubscriptionsIcon />}
        onClick={() => setOpen(!open)}
      >
        Subscribe{" "}
      </Button>
      <br />
      <IFrameContainer isOpen={open} />
    </div>
  );
}
