import { createTheme } from "@mui/material";

let darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#f48fb1', // Світло-рожевий для кращої читабельності на темному
            light: '#f6a5c0',
            dark: '#aa647b',
            contrastText: '#000',
        },
        secondary: {
            main: '#f06292',
        },
        background: {
            default: '#121212', // Класичний темний
            paper: '#1e1e1e',
        },
    },

    typography: {
        fontFamily: "Playfair Display, serif",
        title: "Lobster, sans-serif",
    }

})



let lightTheme = createTheme({

    palette: {
        mode: 'light',
        primary: {
            main: '#ec407a', // Рожевий Medium
            light: '#f48fb1',
            dark: '#c2185b',
            contrastText: '#fff',
        },
        secondary: {
            main: '#f06292',
        },
        background: {
            default: '#fff5f8', // Дуже ніжний рожевий відтінок фону
            paper: '#ffffff',
        },
    },
        typography: {
        fontFamily: "Playfair Display, serif",
        title: "Lobster, sans-serif",
    }
})

export { darkTheme, lightTheme }




