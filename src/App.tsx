import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';
import AppRouter from './routes/AppRouter';
import Navbar from './components/Navbar';
import { DialogSearchProvider } from './components/DialogSearch/DialogSearchProvider';
import useIsSmallWindow from './hooks/useIsSmallWindow';
import Footer from './components/Footer';

function Main() {   // hooks work fine here, after App init
  const isSmallWindow = useIsSmallWindow();
  return (
    <BrowserRouter>
      <DialogSearchProvider>
        <Navbar />
        <AppRouter />
        {isSmallWindow && <Footer />}
      </DialogSearchProvider>
    </BrowserRouter>
  );
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
    </MuiThemeProvider>
  );
}

export default App;

// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.tsx</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
