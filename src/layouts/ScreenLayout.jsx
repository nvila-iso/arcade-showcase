const ScreenLayout = ({
  id = "screen-container",
  children,
  className = "",
}) => {
  return (
    <div
      id={id}
      className={`w-full h-full flex-1 bg-[url('/star-bg.jpg')] bg-cover bg-center ${className}`}
    >
      {children}
    </div>
  );
};

export default ScreenLayout;
