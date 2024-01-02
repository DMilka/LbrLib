import {createTheme, darken, lighten} from "@mui/material";
import {
    ERROR_COLOR_DARK,
    INFO_COLOR,
    MAIN_COLOR_DARK,
    SECONDARY_COLOR_DARK,
    SUCCESS_COLOR,
    MAIN_COLOR_LIGHT, SECONDARY_COLOR_LIGHT,
    WARNING_COLOR, TERTIARY_COLOR_DARK, SUPPORT_COLOR
} from "../colors";

export const darkTheme = createTheme({
    typography: {
        fontFamily: "\"Lato\", \"Montserrat\", \"Roboto\", \"Helvetica\", \"Arial\""
    },
    palette: {
        mode: 'dark',
        primary: {
            main: SECONDARY_COLOR_DARK,
            light: lighten(SECONDARY_COLOR_DARK, 0.7),
            dark: darken(SECONDARY_COLOR_DARK, 0.7)
        },
        secondary: {
            main: TERTIARY_COLOR_DARK,
            light: lighten(TERTIARY_COLOR_DARK, 0.7),
            dark: darken(TERTIARY_COLOR_DARK, 0.7)
        },
        error:{
            main: ERROR_COLOR_DARK,
            light: lighten(ERROR_COLOR_DARK, 0.7),
            dark: darken(ERROR_COLOR_DARK, 0.7)
        },
        warning: {
            main: WARNING_COLOR,
            light: lighten(WARNING_COLOR, 0.7),
            dark: darken(WARNING_COLOR, 0.7)
        },
        info: {
            main: INFO_COLOR,
            light: lighten(INFO_COLOR, 0.7),
            dark: darken(INFO_COLOR, 0.7)
        },
        success: {
            main: SUCCESS_COLOR,
            light: lighten(SUCCESS_COLOR, 0.7),
            dark: darken(SUCCESS_COLOR, 0.7)
        },
        text: {
            primary: MAIN_COLOR_LIGHT,
            secondary: SECONDARY_COLOR_LIGHT,
            disabled: lighten(MAIN_COLOR_LIGHT, 0.4)
        },
        background: {
            default: MAIN_COLOR_DARK,
            paper: MAIN_COLOR_DARK
        },
        action: {
            disabled: '#FF0000',
            active: '#00FF00',
            hover: '#0000FF',
            focus: '#FFFF00'
        },
    }
})