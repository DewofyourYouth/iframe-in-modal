import React, { useState } from "react";
import { Typography, Button, Dialog } from "@material-ui/core";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
export default function Subscribe() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

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
        onClick={() => setOpen(true)}
      >
        Subscribe{" "}
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="md">
        <h1>Dialog is open</h1>
      </Dialog>
    </div>
  );
}
