import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [currentCat, setCategory] = useState('All')

  const onCategoryChange = (category) => 
  setCategory(category)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} tasks={TASKS} onCategoryChange={onCategoryChange}/>
      <NewTaskForm />
      <TaskList tasks={TASKS} currentCategory={currentCat}/>
    </div>
  );
  }

export default App;
