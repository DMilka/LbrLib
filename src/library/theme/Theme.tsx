import React, {ReactNode, useState} from "react";
import {ThemeProvider} from "@mui/material";
import {darkTheme} from "./dark/darkTheme";
import CssBaseline from '@mui/material/CssBaseline';

const LIGHT_THEME_TEXT = 'light';
const DARK_THEME_TEXT = 'dark';
const THEME_KEY = 'lbr_theme';

type PropsWithChildren<P> = P & { children?: ReactNode };
const Theme = (props: PropsWithChildren<any>) => {
    const [actualTheme, setActualTheme] = useState(darkTheme);

    return (
        <ThemeProvider theme={actualTheme}>
            <CssBaseline />
            {props.children}
        </ThemeProvider>
    );
}

export default Theme;