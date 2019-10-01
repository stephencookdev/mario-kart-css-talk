import React, { useState, useEffect } from "react";

const defaultZoom = 2;

const useZoomAmount = () => {
  const [zoomAmount, setZoomAmount] = useState(defaultZoom);

  useEffect(() => {
    const keyup = e => {
      if (!e.ctrlKey) return;

      switch (e.keyCode) {
        case 187:
          // Ctrl +
          setZoomAmount(amount => amount + 0.2);
          break;
        case 189:
          // Ctrl -
          setZoomAmount(amount => amount - 0.2);
          break;
        case 48:
          // Ctrl 0
          setZoomAmount(defaultZoom);
          break;
      }
    };

    document.addEventListener("keyup", keyup);
    return () => document.removeEventListener("keyup", keyup);
  }, []);

  return zoomAmount;
};

const CodeZoomHandler = () => {
  const zoomAmount = useZoomAmount();

  return (
    <style type="text/css">{`
      :root {
        --code-zoom-amount: ${zoomAmount};
      }
    `}</style>
  );
};

export default CodeZoomHandler;
