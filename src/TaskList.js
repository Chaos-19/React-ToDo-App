import { BsTrash } from "react-icons/bs"
import { BiSolidEdit } from "react-icons/bi"
import { FiCheckSquare } from "react-icons/fi"


const TaskList = ({ toDoLists, handleDelete, handleEdite, handleComplete }) => {

  return (
    <div className="task-list">
      {
      toDoLists.map((v, i) => {
          return (<div className="task-item p-0 border rounded shadow-lg bg-white mt-2 max-w-xg mx-auto mt-4">
            <div className="py-4 px-2 flex justify-between items-center" key={v.id}>
              {v.todoName}
              <div className="flex gap-2">
                <button className="p-2 bg-red-800 text-white rounded" onClick={() => handleDelete(v.id)} >
                  <BsTrash />
                </button>
                <button className="p-2 bg-green-800 text-white rounded" onClick={() => handleEdite(v.id, i)}>
                  <BiSolidEdit />
                </button>
                <button className={`p-2 ${v.toDoStatus === "ongoing" ? "bg-gray-800" : "bg-blue-800"} text-white rounded`}
                  onClick={() => handleComplete(v.id)}>
                  <FiCheckSquare />
                </button>
              </div>
            </div>
          </div>)
        })}
    </div>
  );

};

export default TaskList;