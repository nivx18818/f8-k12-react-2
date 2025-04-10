import { Children, useEffect, useState } from "react";
import styles from "./Tabs.module.css";

function Tabs({
  defaultIndex = 0,
  onChange = () => {},
  className = "",
  children,
}) {
  const [currentIndex, setCurrentIndex] = useState(defaultIndex);
  const tabs = Children.toArray(children);

  useEffect(() => {
    onChange(currentIndex);
  }, [currentIndex, onChange]);

  return (
    <div className={styles.container}>
      <div className={styles.tabList}>
        {tabs.map(({ props }, index) => {
          const active = index == currentIndex;

          return (
            <button
              key={index}
              className={`${styles.tabItem} ${active ? styles.active : ""} ${className}`}
              onClick={() => !active && setCurrentIndex(index)}
            >
              {props.title}
            </button>
          );
        })}
      </div>
      <div className={styles.tabContent}>{tabs[currentIndex]}</div>
    </div>
  );
}

export default Tabs;
