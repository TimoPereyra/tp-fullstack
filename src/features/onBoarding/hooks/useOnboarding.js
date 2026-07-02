import { useState } from "react";

export function useOnboarding() {
    const [phase, setPhase] = useState("loading");

    const completeLoading = () => {
        setPhase("welcome");
    };

    const completeWelcome = () => {
        setPhase("ready");
    };

    return {
        phase,
        completeLoading,
        completeWelcome,
    };
}