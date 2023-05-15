import "@/styles/globals.css";
import { ThemeContext, ThemeProvider } from "@/context/themeContext";
import { useContext, useEffect } from "react";
import { SessionProvider } from "next-auth/react";

function App({ Component, pageProps }) {
  const { theme, toggelTheme } = useContext(ThemeContext);

  // useEffect(() => {
  //   const body = document.body;
  //   if (theme === 'dark') {
  //     body.classList.add("dark");
  //   } else {
  //     body.classList.remove("dark");
  //   }
  // }, [theme]);

  return (
    // <SessionProvider session={pageProps.session}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    //  </SessionProvider>
  );
}

export default App;
