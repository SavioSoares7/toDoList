import "../../global.css";
import style from "./app.module.css";

import { IoMdAddCircleOutline } from "react-icons/io";

import { Header } from "../../components/Header";
import { Task } from "../../components/Task";

import { useState } from "react";

type taskBuild = {
  task: string;
  isCompleted?: boolean;
};

export function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<taskBuild[]>([]);

  function createTask(taskName: string) {
    let taskObj: taskBuild = {
      task: taskName,
      isCompleted: false,
    };
    setTasks((prev) => [...prev, taskObj]);
  }
  function deleteTask(task: string) {
    const newListTask = tasks.filter((item) => {
      return item.task !== task.task;
    });

    setTasks(newListTask);
  }

  return (
    <div className={style.main}>
      <Header />
      <div className={style.container}>
        <div className={style.addTask}>
          <input
            type="text"
            className={style.input}
            placeholder="Adicione uma nova tarefa"
            onChange={(e) => setTask(e.target.value)}
          />
          <button className={style.button} onClick={() => createTask(task)}>
            Criar
            <IoMdAddCircleOutline size={16} />
          </button>
        </div>

        <div className={style.containerTask}>
          <div className={style.taskInfo}>
            <p>
              <strong>Tarefas criadas</strong>
              <span>{tasks.length}</span>
            </p>

            <p>
              <strong>Concluídas</strong>
              <span>0</span>
            </p>
          </div>

          <div className={style.taskCreated}>
            {tasks.map((item) => (
              <Task handleDelete={deleteTask} task={item} key={item.task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
