import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { QueryClientProvider, QueryClient } from "react-query";
import Layout from "@components/Layout";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps, router }: AppProps) {
  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <ThemeProvider attribute="class">
        <Layout>
          <QueryClientProvider client={queryClient}>
            <AnimatePresence exitBeforeEnter onExitComplete={handleScrollToTop}>
              <motion.div
                key={router.route}
                initial="exit"
                animate="enter"
                exit="exit"
                transition={{
                  ease: [0.175, 0.85, 0.42, 0.96],
                  duration: 0.2,
                  staggerChildren: 0.1,
                }}
              >
                <Component {...pageProps} />
              </motion.div>
            </AnimatePresence>
          </QueryClientProvider>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
