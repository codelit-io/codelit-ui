import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import MUIAppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";

type position =
  | "fixed"
  | "absolute"
  | "relative"
  | "static"
  | "sticky"
  | undefined;

const AppBar = ({ children, position = "fixed" as position }) => {
  const useStyles = makeStyles((theme) => ({
    toolBar: {
      background: "none",
      backdropFilter: "blur(16px)",
    },
    container: {
      paddingLeft: theme?.spacing(2.5),
      paddingRight: theme?.spacing(1.5),
    },
    leftSide: {
      display: "flex",
      alignItems: "center",
    },
  }));

  const classes = useStyles();

  return (
    <header>
      <MUIAppBar position={position} color="transparent" elevation={0}>
        <Toolbar className={classes.toolBar} disableGutters variant="dense">
          <Container disableGutters maxWidth="xl" className={classes.container}>
            {children && children}
          </Container>
        </Toolbar>
      </MUIAppBar>
    </header>
  );
};

export default React.memo(AppBar);
