import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import { initialState, playerReducer } from "context/playerReducer";
import { useReducer } from "react";
import { PlayerContext, PlayerDispatchContext } from "context/playerContext";
import Home from "pages/Home";
import { GlobalStyles } from "styles/Global";
import { SkeletonTheme } from "react-loading-skeleton";
import { ToastContainer } from "react-toastify";

// import react tostify css
import "react-toastify/dist/ReactToastify.css";
// import skeleton loader css
import "react-loading-skeleton/dist/skeleton.css";
//import rc-slider css
import "rc-slider/assets/index.css";
import { Route, Routes } from "react-router-dom";
import Layout from "components/Layout";
import Search from "pages/Home/Search";
import Error from "pages/Error";

function App() {
  const [state, dispatch] = useReducer(playerReducer, initialState);
  return (
    <PlayerContext.Provider value={state}>
      <PlayerDispatchContext.Provider value={dispatch}>
        <ThemeProvider theme={theme}>
          <SkeletonTheme
            baseColor={theme.colors.secondaryBlack}
            highlightColor={theme.colors.lightWhite}
          >
            <GlobalStyles />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="*" element={<Error />} />
              </Route>
            </Routes>
            <ToastContainer
              position="bottom-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </SkeletonTheme>
        </ThemeProvider>
      </PlayerDispatchContext.Provider>
    </PlayerContext.Provider>
  );
}

export default App;
