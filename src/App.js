import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import { setStorageValue } from "services/localStorage";
import { initialState, playerReducer } from "context/playerReducer";
import { useEffect, useReducer } from "react";
import { PlayerContext, PlayerDispatchContext } from "context/playerContext";
import { GlobalStyles } from "styles/Global";
import { SkeletonTheme } from "react-loading-skeleton";
import { ToastContainer } from "react-toastify";

// import react tostify css
import "react-toastify/dist/ReactToastify.css";
// import skeleton loader css
import "react-loading-skeleton/dist/skeleton.css";
//import rc-slider css
import "rc-slider/assets/index.css";
import AppRouter from "AppRouter";

function App() {
  const [state, dispatch] = useReducer(playerReducer, initialState);
  useEffect(() => {
    setStorageValue("savedTrackIds", state.savedTrackIds);
  }, [state.savedTrackIds]);
  return (
    <PlayerContext.Provider value={state}>
      <PlayerDispatchContext.Provider value={dispatch}>
        <ThemeProvider theme={theme}>
          <SkeletonTheme
            baseColor={theme.colors.secondaryBlack}
            highlightColor={theme.colors.lightWhite}
          >
            <GlobalStyles />
            <AppRouter />
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
