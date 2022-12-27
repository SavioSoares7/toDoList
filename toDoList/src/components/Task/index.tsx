import styles from "./style.module.css";

import { BsTrash } from "react-icons/bs";

export function Task({ task, isCompleted }) {
  return (
    <div className={styles.container}>
      <input type="radio" readOnly={isCompleted} />

      <p> {task} </p>

      <BsTrash size={16} />
    </div>
  );
}
