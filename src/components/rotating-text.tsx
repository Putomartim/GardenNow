import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import clsx from "clsx";

export type RotatingTextProps = {
  texts: string[];
  rotationInterval?: number;
  mainClassName?: string;
  style?: CSSProperties;
  staggerFrom?: "first" | "last";
  initial?: Record<string, unknown>;
  animate?: Record<string, unknown>;
  exit?: Record<string, unknown>;
  staggerDuration?: number;
  splitLevelClassName?: string;
  transition?: Record<string, unknown>;
};

export function RotatingText({
  texts,
  rotationInterval = 2000,
  mainClassName,
  style,
}: RotatingTextProps) {
  const safeTexts = useMemo(() => (texts.length > 0 ? texts : [""]), [texts]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [safeTexts]);

  useEffect(() => {
    if (safeTexts.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % safeTexts.length);
    }, rotationInterval);

    return () => window.clearInterval(intervalId);
  }, [rotationInterval, safeTexts]);

  return (
    <span
      className={clsx(
        "flex items-center justify-center text-center transition-transform duration-500",
        mainClassName,
      )}
      style={style}
    >
      {safeTexts[currentIndex]}
    </span>
  );
}
