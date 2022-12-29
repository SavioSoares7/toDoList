import styles from "./style.module.css";

import { BsTrash } from "react-icons/bs";

export function Task({ task }) {
  return (
    <div className={styles.container}>
      <input type="checkbox" />
      <p> {task} </p>

      <BsTrash size={16} />
    </div>
  );
}
