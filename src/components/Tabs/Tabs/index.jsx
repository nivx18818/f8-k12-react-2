import { Children, useState } from "react";

function Tabs({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const tabs = Children.toArray(children);

  return (
    <div className="tabs-container">
      <div className="tabs-list">
        {tabs.map(({ props: { title } }, index) => {
          const active = index == currentIndex;

          return (
            <button
              key={index}
              style={{
                color: active ? "red" : "inherit",
                fontWeight: active ? "bold" : "normal",
              }}
              className="tab-item"
              onClick={() => setCurrentIndex(index)}
            >
              {title}
            </button>
          );
        })}
      </div>
      <div className="tabs-content">{tabs[currentIndex].props.children}</div>
    </div>
  );
}

export default Tabs;
