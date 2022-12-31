import styles from "./style.module.css";

import { BsTrash } from "react-icons/bs";

export function Task({ task, handleDelete }) {
  return (
    <div className={styles.container}>
      <input type="checkbox" readOnly={task.isCompleted} />
      <p> {task.task} </p>

      <button onClick={() => handleDelete(task)}>
        <BsTrash size={16} />
      </button>
    </div>
  );
}
