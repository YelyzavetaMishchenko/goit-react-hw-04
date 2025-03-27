const LoadMoreBtn = ({ onClick }) => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <button className="btn" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
