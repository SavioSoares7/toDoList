interface tasks {
  isCompleted: boolean;
  task: string;
}

interface api extends Array<tasks> {}

export let API: api = [
  {
    isCompleted: false,
    task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  },
  {
    isCompleted: false,
    task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  },
  {
    isCompleted: false,
    task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  },
  {
    isCompleted: true,
    task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  },
];
