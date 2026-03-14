import { useCallback } from "react";

const useScrollToSection = () => {
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    history.replaceState(null, "", `#${id}`);
  }, []);

  return scrollToSection;
}

export default useScrollToSection