import s from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={s.container}>
      <button className={s.btn} onClick={onClick} type="submit">
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
