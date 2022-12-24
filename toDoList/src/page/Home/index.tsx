import "../../global.css";
import style from "./app.module.css";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Home() {
  return (
    <div className={style.main}>
      <Header />
      <div className={style.container}>
        <div className={style.addTask}>
          <Input />
          <Button />
        </div>
      </div>
    </div>
  );
}
