function Tab({ title, children }) {
  return (
    <div>
      <p>{title}</p>
      <div>{children}</div>
    </div>
  );
}

export default Tab;
