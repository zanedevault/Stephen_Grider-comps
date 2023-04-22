function Panel({ children, className, ...rest }) {
  return (
    <div className={`${className} border rounded p-3 shadow bg-white w-full`} {...rest}>{children}</div>
  );
}

export default Panel;
