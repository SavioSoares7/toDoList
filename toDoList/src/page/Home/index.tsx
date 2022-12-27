import "../../global.css";
import style from "./app.module.css";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Task } from "../../components/Task";

import { API } from "../../API";

export function Home() {
  return (
    <div className={style.main}>
      <Header />
      <div className={style.container}>
        <div className={style.addTask}>
          <Input />
          <Button />
        </div>

        <div className={style.containerTask}>
          <div className={style.taskInfo}>
            <p>
              <strong>Tarefas criadas</strong>
              <span>{API.length}</span>
            </p>

            <p>
              <strong>Concluídas</strong>
              <span>0</span>
            </p>
          </div>

          <div className={style.taskCreated}>
            {API.map((item) => (
              <Task
                isCompleted={item.isCompleted}
                task={item.task}
                key={item.task}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
