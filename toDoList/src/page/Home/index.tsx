import "../../global.css";
import style from "./app.module.css";

import { Header } from "../../components/Header";

export function Home() {
  return (
    <>
      <Header />
      <div className={style.container}>oi</div>
    </>
  );
}
