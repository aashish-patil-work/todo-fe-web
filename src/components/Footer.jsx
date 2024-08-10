import styles from "../css/footer.module.css";
export default function Footer({ completedItemsCount, totalItemsCount }) {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.itemTextContainer}>
          <span style={{ marginRight: "40px" }}>
            Completed Items: {completedItemsCount}
          </span>
          <span>Total Items: {totalItemsCount}</span>
        </div>
      </div>
    </>
  );
}
