import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector, toDoState } from "./atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import { ReactEventHandler } from 'react';



function ToDoList(){
  const toDos= useRecoilValue(toDoSelector);
  const [category,setCategory] = useRecoilState(categoryState)
  const onInput =(event:React.FormEvent<HTMLSelectElement>)=>{
    setCategory(event.currentTarget.value as any);
  };
      return (
        <div className="ToDoList">
          <h1>To Dos<i className="fas fa-leaf"></i></h1>
          <hr/>
          <select value={category} onInput={onInput}>
            <option value={Categories.TO_DO}>To Do</option>
            <option value={Categories.DOING}>Doing</option>
            <option value={Categories.DONE}>Done</option>
          </select>
         <CreateToDo/>
         {toDos?.map((toDo) => <ToDo key={toDo.id} {...toDo}/>) }
        </div>
      );
}


export default ToDoList;