import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router keeps the old scroll position between pages and ignores
 * #hash targets. New page → top; /page#section → scroll to that section.
 */
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    // Wait a frame so the target section has rendered.
    const id = decodeURIComponent(hash.slice(1));
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};

export default ScrollManager;
