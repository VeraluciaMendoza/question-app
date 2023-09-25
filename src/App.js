import { AppProvider } from "./context";
// import { GlobalStyles } from "./theme";
import { ThemeProvider } from "./theme/context";
import HomePage from "./pages/HomePage";


const App = ({ Component, pageProps }) => {

  return (
    <AppProvider>
      <ThemeProvider>
        <HomePage/>
        {/* <GlobalStyles /> */}
        {/* <LayoutComponent> */}
          {/* <Component {...pageProps} /> */}
        {/* </LayoutComponent> */}
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;