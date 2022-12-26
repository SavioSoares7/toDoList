import "../../global.css";
import style from "./app.module.css";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

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
              <span>0</span>
            </p>

            <p>
              <strong>Concluídas</strong>
              <span>0</span>
            </p>
          </div>

          <div className={style.taskCreated}></div>
        </div>
      </div>
    </div>
  );
}
