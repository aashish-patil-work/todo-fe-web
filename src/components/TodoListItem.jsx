import styles from "../css/todolistitem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function TotoListItem({ itemValue, handleDelete, markUnmarkCompleted }) {
  //** mark item as completed
  function onItemTextClick(e, itemClicked) {
    e.preventDefault();
    console.log("onItemTextClick ", itemClicked);
    markUnmarkCompleted(itemClicked);
  }

  //** delete item from List
  function onDeleteBtnClick(e, itemClicked) {
    e.preventDefault();
    console.log("onDeleteBtnClick ", itemClicked);
    handleDelete(itemClicked);
  }

  return (
    <>
      <div className={styles.todolistitem}>
        {/* Item Text Value */}
        <div className={styles.itemText}>
          <span
            className={itemValue.done ? styles.completed : ""}
            onClick={(e) => onItemTextClick(e, itemValue)}
          >
            {itemValue.name}
          </span>
        </div>

        {/* Delete button */}
        <span
          className={styles.deleteButtonContainer}
          onClick={(e) => onDeleteBtnClick(e, itemValue)}
        >
          <FontAwesomeIcon
            className={styles.deleteButton}
            icon={faTrashCan}
            size="xs"
            color="gray"
          ></FontAwesomeIcon>
        </span>
      </div>

      {/* Line seperator */}
      <hr className={styles.line}></hr>
    </>
  );
}

export default TotoListItem;
