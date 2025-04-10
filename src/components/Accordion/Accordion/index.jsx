import { Children, useEffect, useRef, useState } from "react";
import styles from "./Accordion.module.css";

function Accordion({
  defaultIndex = -1,
  onChange = () => {},
  collapseOthers = true,
  className = "",
  children,
}) {
  const items = Children.toArray(children);
  const [activeIndices, setActiveIndices] = useState(
    items.map((_, index) => index === defaultIndex)
  );
  const latestToggledIndex = useRef(defaultIndex);
  const buttonRefs = useRef([]);

  useEffect(() => {
    onChange(latestToggledIndex.current);
  }, [activeIndices, onChange]);

  const handleClick = (index) => {
    const newActiveIndices =
      collapseOthers && index !== latestToggledIndex.current
        ? items.map(() => false)
        : [...activeIndices];

    newActiveIndices[index] = !newActiveIndices[index];
    setActiveIndices(newActiveIndices);

    latestToggledIndex.current = index;
  };

  const handleKeyDown = (e, index) => {
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        buttonRefs.current[(index + 1) % items.length]?.focus();
        break;
      case "ArrowLeft":
      case "ArrowUp":
        buttonRefs.current[(index - 1 + items.length) % items.length]?.focus();
        break;
    }
  };

  return (
    <div className={`${styles.container} ${className}`}>
      {items.map(({ props }, index) => (
        <div
          key={index}
          className={`${styles.item} ${
            activeIndices[index] ? styles.active : ""
          }`}
        >
          <button
            ref={(el) => (buttonRefs.current[index] = el)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            {props.header}
          </button>
          <div className={styles.content}>{props.children}</div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
