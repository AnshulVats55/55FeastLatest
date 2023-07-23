import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
      action: {
        active: "#ef5d36",
      }
    },
    typography: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: 16,
    },
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
)
