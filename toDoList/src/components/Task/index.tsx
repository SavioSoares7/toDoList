import styles from "./style.module.css";

import { BsTrash } from "react-icons/bs";

import { useState } from "react";

export function Task({ task, handleDelete }) {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  function handleTask() {
    console.log(task.isCompleted);
    if (isCompleted) {
      return setIsCompleted(false);
    } else {
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
