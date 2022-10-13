const Loading = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(214, 214, 214, 0.2)",
        zIndex: 9999,
      }}
    >
      <div className="lds-hourglass"></div>
    </div>
  );
};
export default Loading;
