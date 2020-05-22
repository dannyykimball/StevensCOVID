import React, { useState } from "react";
//=====Material Ui=====
import indigo from "@material-ui/core/colors/indigo";
import orange from "@material-ui/core/colors/orange";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
//=====Local Imports=====
export const UserContext = React.createContext(null);

const primary = indigo[800];
const secondary = orange[600];

const palette = {
    primary: { main: primary },
    secondary: { main: secondary }
};

const Theme = createMuiTheme({ palette });

const Store = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <ThemeProvider theme={Theme}>
            <UserContext.Provider value={[user, setUser]}>
                {children}
            </UserContext.Provider>
        </ThemeProvider>
    );
};

export default Store;
