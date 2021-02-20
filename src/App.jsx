import { Button, Container, ThemeProvider } from "@material-ui/core";
import React from "react";
import  theme from './config/ConfigtTheme'
import { AccessAlarm,Home } from '@material-ui/icons';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Button color="secondary"
            startIcon={ <AccessAlarm />}
        >
       Alarma
       </Button>
       <Button color="secondary"
            startIcon={ <Home />}
        >
       Home
       </Button>
    </ThemeProvider>
  );
};

export default App;
