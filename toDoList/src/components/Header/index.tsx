import style from "./style.module.css";

import { AiOutlineRocket } from "react-icons/ai";

export function Header() {
  return (
    <header className={style.container}>
      <AiOutlineRocket />
      <strong>
        to<span>do</span>
      </strong>
    </header>
  );
}
