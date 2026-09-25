import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} | Himalaya Crest`
      : "Himalaya Crest | Nepal Tours & Treks";
  }, [title]);
}
