import { Fragment, memo, useEffect, useMemo, useState, type CSSProperties } from "react";
import clsx from "clsx";
import { AnimatePresence, motion, type MotionProps } from "framer-motion";

export type RotatingTextProps = {
  texts: string[];
  rotationInterval?: number;
  staggerFrom?: "first" | "last";
  staggerDuration?: number;
  splitLevelClassName?: string;
  mainClassName?: string;
  style?: CSSProperties;
  initial?: MotionProps["initial"];
  animate?: MotionProps["animate"];
  exit?: MotionProps["exit"];
  transition?: MotionProps["transition"];
};

const defaultVariants: Required<Pick<MotionProps, "initial" | "animate" | "exit">> = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "-120%", opacity: 0 },
};

type SplitTextProps = {
  value: string;
  staggerFrom: "first" | "last";
  splitLevelClassName?: string;
  variants: typeof defaultVariants;
  transition?: MotionProps["transition"];
};

const SplitText = ({ value, staggerFrom, splitLevelClassName, variants, transition }: SplitTextProps) => {
  const characters = useMemo(() => value.split(""), [value]);

  const order = useMemo(() => {
    return characters.map((_, index) =>
      staggerFrom === "last" ? characters.length - 1 - index : index,
    );
  }, [characters, staggerFrom]);

  return (
    <Fragment>
      {characters.map((char, index) => (
        <span
          key={`${char}-${index}`}
          className={clsx("inline-block", splitLevelClassName)}
          style={{ whiteSpace: "pre" }}
        >
          <motion.span
            className="inline-block"
            custom={order[index]}
            {...variants}
            transition={transition}
          >
            {char}
          </motion.span>
        </span>
      ))}
    </Fragment>
  );
};

const RotatingTextComponent = ({
  texts,
  rotationInterval = 2000,
  staggerFrom = "first",
  staggerDuration = 0.05,
  splitLevelClassName,
  mainClassName,
  style,
  initial,
  animate,
  exit,
  transition,
}: RotatingTextProps) => {
  const safeTexts = useMemo(() => (texts.length > 0 ? texts : [""]), [texts]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [safeTexts]);

  useEffect(() => {
    if (safeTexts.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % safeTexts.length);
    }, rotationInterval);

    return () => window.clearInterval(intervalId);
  }, [rotationInterval, safeTexts]);

  const containerTransition = useMemo<MotionProps["transition"]>(
    () => ({ staggerChildren: staggerDuration }),
    [staggerDuration],
  );

  const variants = useMemo(
    () => ({
      initial: initial ?? defaultVariants.initial,
      animate: animate ?? defaultVariants.animate,
      exit: exit ?? defaultVariants.exit,
    }),
    [animate, exit, initial],
  );

  return (
    <div className={clsx("inline-flex", mainClassName)} style={style}>
      <AnimatePresence mode="wait">
        <motion.div
          key={`${safeTexts[currentIndex]}-${currentIndex}`}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={containerTransition}
          style={{ display: "inline-block" }}
        >
          <SplitText
            value={safeTexts[currentIndex]}
            staggerFrom={staggerFrom}
            splitLevelClassName={splitLevelClassName}
            variants={variants}
            transition={transition}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

RotatingTextComponent.displayName = "RotatingText";

const RotatingText = memo(RotatingTextComponent);

export { RotatingText };

export default RotatingText;
