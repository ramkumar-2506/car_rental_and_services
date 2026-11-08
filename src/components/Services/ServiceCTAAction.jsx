import { useEffect, useRef, useState } from "react";

const ServiceCTAAction = ({
  message = "Request received! We'll get back to you shortly.",
  durationMs = 3000,
}) => {
  const [toast, setToast] = useState("");
  const tRef = useRef(null);

  useEffect(() => {
    return () => {
      if (tRef.current) window.clearTimeout(tRef.current);
    };
  }, []);

  const handleClick = () => {
    setToast(message);
    if (tRef.current) window.clearTimeout(tRef.current);
    tRef.current = window.setTimeout(() => setToast(""), durationMs);
  };

  return { toast, handleClick };
};

export default ServiceCTAAction;

