interface TODO {
  id: number;
  name: string;
  complete: boolean;
}

interface Task {
  name: string;
}

const printTodo = (todo: TODO): void => {
  console.log(
    `Todo id ${todo.id}, name ${todo.name} and status is ${todo.complete}`
  );
};

const printTask = (task: Task): void => {
  console.log(`Tasl  name ${task.name}`);
};

// Object that statisfies both the interfaces
const TodoOrTask = {
  id: 1,
  name: "TestTask",
  complete: true,
};

// TodoOrTask can be called for print Todo
printTodo(TodoOrTask);
// TodoOrTask can be called for print Task as well
printTask(TodoOrTask);
