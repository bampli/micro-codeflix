import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </CssBaseline>
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
