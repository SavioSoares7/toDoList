import style from "./style.module.css";
import { IoMdAddCircleOutline } from "react-icons/io";

export function Button() {
  return (
    <button className={style.button}>
      Criar
      <IoMdAddCircleOutline size={16} />
    </button>
  );
}
