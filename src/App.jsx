import { useOnboarding } from "./features/onboarding/hooks/useOnboarding";

import LoadingScreen from "./features/onboarding/components/LoadingScreen/LoadingScreen";
import WelcomeModal from "./features/onboarding/components/WelcomeModal/WelcomeModal";
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
    </>
  );
}

export default App;