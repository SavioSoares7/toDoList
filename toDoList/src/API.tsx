interface tasks {
  isCompleted: boolean;
  task: string;
}

interface api extends Array<tasks> {}

export let API: api = [
  {
    isCompleted: false,
    task: "Limpar á casa.",
  },
  {
    isCompleted: false,
    task: "Sair com o cat.",
  },
  {
    isCompleted: false,
    task: "Programar.",
  },
  {
    isCompleted: true,
    task: "Viajar.",
  },
];
