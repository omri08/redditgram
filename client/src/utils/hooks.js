import { useState, useMemo } from "react";

export function useComponent(base, ChangeTo, expectedValue, value) {
  const [component, setComponent] = useState(base);

  const res = useMemo(() => {
    if (expectedValue === value) setComponent(ChangeTo);
    else setComponent(base);
  }, [expectedValue, value]);

  return component;
}
