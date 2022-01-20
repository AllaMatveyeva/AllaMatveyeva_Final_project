import { useEffect } from "react";
import { useState } from "react";

function useWindowSize() {
  const [size, setSize] = useState(0);
  useEffect(() => {
    function updateSize() {
      setSize(window.screen.width);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
export default useWindowSize;
