import { useEffect, useState } from "react";

export function useDebounce(query , delay) {

  const [debounce, setDebounce] = useState("");
  useEffect(() => {
    var timer = setTimeout(() => {
      setDebounce(query);
    }, delay);
    return () => clearTimeout(timer);
  }, [query , delay]);

  return debounce;
}
