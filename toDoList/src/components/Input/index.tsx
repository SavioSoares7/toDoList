import style from "./style.module.css";

export function Input() {
  return (
    <input placeholder="Adicione uma nova tarefa" className={style.container} />
  );
}
