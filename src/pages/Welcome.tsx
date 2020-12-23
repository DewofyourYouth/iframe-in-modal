import React from "react";
import { Typography, Button } from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useHistory } from "react-router-dom";

export default function Welcome() {
  const history = useHistory();
  return (
    <div>
      <Typography variant="h2" gutterBottom>Welcome</Typography>
      <Typography variant="body1" gutterBottom>Aliqua reprehenderit tempor eiusmod cupidatat excepteur sit occaecat esse eu sit non nulla aliqua nulla. Sit sint do ea adipisicing reprehenderit. Officia officia aliquip incididunt non mollit incididunt laborum amet tempor culpa anim commodo pariatur. Minim ipsum sunt tempor fugiat tempor aliquip. Qui laboris cillum minim in ad Lorem. Anim ex nisi adipisicing ad minim aliquip et id in ipsum adipisicing cillum.</Typography>
      <Typography variant="body2" gutterBottom>Culpa pariatur irure non occaecat. Ullamco elit commodo eu et consectetur commodo velit incididunt deserunt officia cupidatat ut sit id. Exercitation est laboris esse voluptate laboris pariatur anim id nulla fugiat. Mollit irure esse nostrud laboris laborum quis eiusmod voluptate. Magna ex ad occaecat aliqua occaecat cupidatat aute. Voluptate occaecat pariatur do irure ullamco sit eiusmod aute adipisicing. Ex esse sit sint eu eiusmod quis laborum mollit proident ad.</Typography>
      <Typography variant="caption" gutterBottom>Nostrud nulla aliqua occaecat eu velit qui ullamco excepteur reprehenderit quis ea. Ex incididunt dolore voluptate proident qui qui aliqua dolore quis aliquip pariatur labore. Velit fugiat labore officia sint minim voluptate aliquip proident elit deserunt. Consequat amet laborum non sint Lorem eiusmod amet ullamco voluptate ad adipisicing veniam veniam exercitation. Mollit voluptate cupidatat sint sunt ad ipsum exercitation adipisicing veniam aute Lorem occaecat occaecat pariatur. Ullamco laboris et ea dolore veniam voluptate culpa adipisicing aliqua ex duis tempor. Aute amet incididunt adipisicing et pariatur dolor veniam et deserunt qui sit ipsum amet.</Typography>
      <Typography variant="h4" gutterBottom>Click here to continue your journey!!!!</Typography>
      <Button
        size="large"
        color="primary"
        variant="contained"
        endIcon={<NavigateNextIcon />}
        onClick={() => history.push('/subscribe')}
      >
        Next
      </Button>
    </div>
  );
}
