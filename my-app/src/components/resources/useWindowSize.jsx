import { width } from "@mui/system";
import { useEffect } from "react";
import { useState } from "react";

function useWindowSize(param) {
  const [size, setSize] = useState(0);
  useEffect(() => {
    function updateSize() {
      param === "width"
        ? setSize(window.screen.width)
        : setSize(window.screen.height);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
export default useWindowSize;
