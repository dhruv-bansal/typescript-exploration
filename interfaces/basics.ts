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
const TodoOrTask1 = {
  id: 1,
  name: "TestTask",
  complete: true,
};

// TodoOrTask can be called for print Todo
printTodo(TodoOrTask1);
// TodoOrTask can be called for print Task as well
printTask(TodoOrTask1);

// Otherway round won't work as
// object should have all the properties defined in the type
// so below object doesn't qualifies as a TODO
const TodoOrTask2 = {
  name: "TestTask",
};

// TodoOrTask2 doesn't qualify as TODO
//printTodo(TodoOrTask2);

// TodoOrTask can be called for print Task as well
printTask(TodoOrTask2);
