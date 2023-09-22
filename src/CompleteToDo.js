import { useState } from "react";
import { FaArrowAltCircleDown } from 'react-icons/fa';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import TaskList from "./TaskList";
const CompleteToDo = ({ completedTodo, toDoLists, handleDelete, handleEdite, handleComplete }) => {

  const [isClick, setIsClick] = useState(false);

  const handlClick = () => {
    isClick ? setIsClick(false) : setIsClick(true)
  };

  return (
    <>
      <button
        className={`px-5 py-3 my-2 rounded-lg flex justify-around items-center ${isClick ? "bg-emerald-700 hover:bg-emerald-800" : "bg-gray-600"}`}
        onClick={handlClick}>
        <span className='font-medium text-white mr-3'>
          Completed Todos {completedTodo}
        </span>
        {isClick ? <FaArrowAltCircleDown /> : <FaArrowAltCircleRight />}
      </button >
      {isClick && <TaskList toDoLists={toDoLists} handleEdite={handleEdite} handleDelete={handleDelete} handleComplete={handleComplete} />
      }
    </>
  );

};

export default CompleteToDo;