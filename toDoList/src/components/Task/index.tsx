import styles from "./style.module.css";

import { BsTrash } from "react-icons/bs";

import { useState } from "react";

export function Task({ task, handleDelete }: any) {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  function handleTask() {
    if (isCompleted) {
      task.isCompleted = false;
      return setIsCompleted(false);
    } else {
      task.isCompleted = true;
      return setIsCompleted(true);
    }
  }

  return (
    <div className={styles.container}>
      <input type="checkbox" onChange={handleTask} />
      <p className={isCompleted ? styles.checked : styles.noChecked}>
        {task.task}
      </p>

      <button onClick={() => handleDelete(task)}>
        <BsTrash size={16} />
      </button>
    </div>
  );
}
