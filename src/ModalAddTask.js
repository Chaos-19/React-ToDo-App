const ModalAddTask = ({ isOpen, onClose, setToDoLists, toDoLists, toDoItem, setToDoItem, toDoId, setToDoId, }) => {

  const handlAddToDo = (e) => {
    e.preventDefault();
    if (toDoLists.some(v => v.id === toDoId)) {
      setToDoLists(toDoLists.map(v => {
        if (v.id === toDoId) {
          v.todoName = toDoItem;
          return v;
        }
        return v
      }))
      setToDoItem('');
    } else {
      setToDoLists([...toDoLists, {
        id: toDoId,
        todoName: toDoItem,
        toDoStatus: "ongoing"
      }]);
      setToDoId((toDoId + 1));
    }
    setToDoItem('');
    onClose();
  };



  return (
    <div>
      <div className={`fixed ${isOpen ? "block" : "hidden"} 
      z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto 
      h-full w-full px-4 modal`}>
        <div className="relative top-1/2 inset-y-0 mx-auto shadow-xl rounded-md bg-white max-w-md">
          <div className="flex justify-between items-center bg-green-500 text-white text-xl rounded-t-md px-4 py-2">
            <h3>Add ToDo</h3>
            <button onClick={onClose}>x</button>
          </div>
          <form onSubmit={handlAddToDo}>
            <div className="max-h-48  p-4">
              <input
                type="text"
                className="p-2  py-4 w-full border border-gray-500-800 focus:outline-none"
                placeholder="Add ToDo"
                required
                value={toDoItem}
                onChange={(e) => setToDoItem(e.target.value)}
              />
            </div>
            <div
              className="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
              <button className="bg-green-500 py-2 px-4 ml-3 text-whit rounded-md hover:bg-green-700">Add Task</button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition" onClick={onClose}>
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

};

export default ModalAddTask;