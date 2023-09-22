import TaskList from "./TaskList";
import { BsSearch } from "react-icons/bs"
import ModalAddTask from "./ModalAddTask";
import CompleteToDo from "./CompleteToDo";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toDoLists, setToDoLists] = useState([]);
  const [toDoItem, setToDoItem] = useState('');
  const [toDoId, setToDoId] = useState(0);
  const [searchItem, setSearchItem] = useState('');


  const handleComplete = (id) => {
    setToDoLists([...toDoLists].map(v => {
      if (v.id === id) {
        v.toDoStatus === "ongoing" ? v.toDoStatus = "complete" : v.toDoStatus = "ongoing";
        return v;
      }
      return v;
    }))
  };

  const handleDelete = (id) => {
    setToDoLists(toDoLists.filter(v => {
      return v.id !== id
    }));
  };



  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };


  const handleEdite = (id, index) => {
    setToDoItem(toDoLists[index].todoName);
    openModal();
    setToDoId(id);

  };

  const search = () => {
    return toDoLists.filter(v => (v.todoName.toLowerCase()).startsWith(searchItem.toLowerCase()));
  };
  const filterTo = (condition) => {
    return [...toDoLists].filter(v => (v.toDoStatus === condition));
  };



  return (
    <div className="container flex flex-col gap-3 justify-center items-center w-full h-screen px-2">
      <h2 className="text-4xl">ToDo Lists</h2>
      <div className="task-list w-full md:w-8/12">
        <div className="flex items-center justify-end">
          <div className="search-bar flex items-center rounded-lg border border-gary-900 flex-1 focus:outline-green-600">
            <input
              type="search"
              className="p-2  py-4 flex-1 focus:outline-none"
              placeholder="Add ToDo"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            />
            <button className="p-2 bg-blue-800 text-white rounded mr-3">
              <BsSearch />
            </button>
          </div>
          <button className="py-3 px-4 ml-3 border border-green-900 text-whit rounded" onClick={openModal}>
            Add ToDos
          </button>
        </div>
        <TaskList toDoLists={searchItem ? search() : filterTo('ongoing')} handleEdite={handleEdite} handleDelete={handleDelete} handleComplete={handleComplete} />

        <CompleteToDo toDoLists={filterTo('complete')} completedTodo={filterTo('complete').length}
          handleEdite={handleEdite} handleDelete={handleDelete}
          handleComplete={handleComplete} />
      </div>
      {
        isModalOpen && <ModalAddTask
          isOpen={isModalOpen} onClose={closeModal}
          setToDoLists={setToDoLists}
          toDoLists={toDoLists}
          toDoItem={toDoItem}
          setToDoItem={setToDoItem}
          toDoId={toDoId} setToDoId={setToDoId}

        />
      }
    </div >
  );
}

export default App;
