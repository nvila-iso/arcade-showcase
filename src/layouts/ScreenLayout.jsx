const ScreenLayout = ({
  id = "screen-container",
  children,
  className = "",
}) => {
  return (
    <>
      <div
        id={id}
        className={`w-full min-h-full bg-cover bg-center flex ${className}`}
      >
        {children}
      </div>
    </>
  );
};
export default ScreenLayout;
