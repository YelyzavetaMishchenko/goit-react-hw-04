import styles from "./ImageCard.module.css";

const ImageCard = ({ data, onClick }) => {
  return (
    <div className={styles.card} onClick={() => onClick(data)}>
      <img src={data.urls.small} alt={data.alt_description} />
    </div>
  );
};

export default ImageCard;
