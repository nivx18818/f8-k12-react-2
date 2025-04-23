import { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

function Button(props) {
  const {
    children,
    variant = "primary",
    size = "md",
    type = "button",
    to = "",
    href = "",
    disabled = false,
    isLoading = false,
    onClick,
    ...restProps
  } = props;

  let Component = "button";
  const passedProps = {};

  if (to) {
    Component = Link;
    passedProps.to = to;
  } else if (href) {
    Component = "a";
    passedProps.href = href;
    passedProps.target = "_blank";
    passedProps.rel = "noreferrer noopener";
  } else {
    passedProps.type = type;
  }

  const handleClick = () => {
    if (disabled || isLoading) return;
    onClick && onClick();
  };

  return (
    <Component
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      onClick={handleClick}
      {...passedProps}
      {...restProps}
    >
      {isLoading ? (
        <span className={styles.spinner}>
          <span className={styles.spinnerItem}></span>
          <span className={styles.spinnerItem}></span>
          <span className={styles.spinnerItem}></span>
        </span>
      ) : (
        children
      )}
    </Component>
  );
}

export default memo(Button);
