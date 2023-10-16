import React, { useEffect, useState } from "react";

import axios from "axios";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [released, setReleased] = useState("");
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const { data } = await axios.get(
          "https://backend-api-si97.onrender.com/todo/all"
        );
        console.log(data);
        setTodos(data.todos);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    fetchTodos();
  }, []);
  const submitTodos = async () => {
    try {
      await axios.post(`https://backend-api-si97.onrender.com/todo`, {
        title: title,
        author: author,
        released: released,
      });
      const newTodoItem = {
        title: title,
        author: author,
        released: released,
      };
      setTodos((prevTodos) => [...prevTodos, newTodoItem]);
      setTitle("");
      setAuthor("");
      setReleased("");
    } catch (error) {}
  };

  return (
    <div>
      <h1 className="h-[calc(100vh-60px)] bg-[#262626] flex items-center justify-center">
        <div className=" bg-[#0a0a0a] w-[800px] p-4 rounded">
          <div className="text-white text-center border-b border-[#413838] pb-2 mb-3">
            <h1 className="text-white  text-4xl">Book List</h1>
          </div>
          <div>
            <input
              type="text"
              name=""
              id=""
              className="w-full py-2 px-2 rounded block mb-3"
              placeholder="Enter book name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              name=""
              id=""
              className="w-full py-2 px-2 rounded block mb-3 "
              placeholder="Enter author name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <input
              type="text"
              name=""
              id=""
              className="w-full py-2 px-2 rounded block mb-3"
              placeholder="Enter released date"
              value={released}
              onChange={(e) => setReleased(e.target.value)}
            />
            <button
              onClick={submitTodos}
              className="bg-[#44403c] w-full text-white opacity-90 py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
          {isLoading ? (
            <p className="text-white text-center text-2xl pt-4">Loading</p>
          ) : (
            <table className="border-collapse w-full  rounded-md mt-4">
              <thead>
                <tr className="border border-[#413838]">
                  <th className="px-2 py-2 text-white text-left">Title</th>
                  <th className="px-2 py-2 text-white text-left">Author</th>
                  <th className="px-2 py-2 text-white text-left">Released</th>
                  <th className="px-2 py-2 text-white text-left">Edit</th>
                  <th className="px-2 py-2 text-white text-left">Delete</th>
                </tr>
              </thead>
              <tbody>
                {todos.map((todo) => (
                  <tr key={todo.id} className="border border-[#413838]">
                    <td className="px-2 py-2 text-white">{todo.title}</td>
                    <td className="px-2 py-2 text-white">{todo.author}</td>
                    <td className="px-2 py-2 text-white">{todo.released}</td>
                    <td className="px-2 py-2">
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path
                            fill="#ed7899"
                            d="M16.71 3.29a1 1 0 0 0-1.42 0l-11 11a1 1 0 0 0-.21.33L3 18a1 1 0 0 0 1 1 1 1 0 0 0 .24-.03l3.37-1.12a1 1 0 0 0 .33-.21l11-11a1 1 0 0 0 0-1.42zM5 17l-1.37.46.46-1.37L15.29 6.71 17 8.41zm10-10l-4 4-1.88-1.88 4-4L15 7z"
                          />
                        </svg>
                      </button>
                    </td>
                    <td className="px-2 py-2 text-white">
                      {" "}
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path
                            fill="white"
                            d="M6 5v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2zm9 2h1v9h-1zm-3 0h1v9h-1zm-3 0h1v9H9z"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </h1>
    </div>
  );
}
