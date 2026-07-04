import { useOnboarding } from "./features/onBoarding/hooks/useOnboarding";
import { Analytics } from "@vercel/analytics/react";

import LoadingScreen from "./features/onBoarding/components/LoadingScreen/LoadingScreen";
import WelcomeModal from "./features/onBoarding/components/WelcomeModal/WelcomeModal";
import Home from "./pages/Home/Home";

import styles from "./App.module.css";

function App() {
  const { phase, completeLoading, completeWelcome } = useOnboarding();

  const isLoading = phase === "loading";
  const isWelcome = phase === "welcome";
  const isReady = phase === "ready";

  return (
    <>
      {/* Home solamente aparece cuando termina onboarding */}
      {isReady && <Home />}

      {/* Capa de onboarding */}
      {!isReady && (
        <div className={styles.stage}>
          {/* Loader */}
          <div
            className={`${styles.layer} ${
              isLoading ? styles.visible : styles.hidden
            }`}
          >
            <LoadingScreen onComplete={completeLoading} />
          </div>

          {/* Modal */}
          <div
            className={`${styles.layer} ${
              isWelcome ? styles.visible : styles.hiddenDelayed
            }`}
          >
            <WelcomeModal onClose={completeWelcome} />
          </div>
        </div>
      )}
      <Analytics />
    </>
  );
}

export default App;