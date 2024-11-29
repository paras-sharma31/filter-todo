import useAuth from "@/hooks/useAuth";
import List from "./List";
import Tabs from "./Tabs";
import { useState } from "react";
import CompletedTask from "./CompletedTask";
import DeletedTask from "./DeletedTask";

export default function Todo() {
  const { state, handleChange, handleSumbit, todoData, setTodoData } =
    useAuth();
  const [categoryNo, setCategoryNo] = useState(1);

  const next = (value: number) => {
    setCategoryNo((prev) => (prev === value ? 0 : value));
  };

  const rederCategory = () => {
    switch (categoryNo) {
      case 1:
        return <List data={todoData} setTodoData={setTodoData} />;
      case 2:
        return <CompletedTask />;
      case 3:
        return <DeletedTask />;
      default:
        break;
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <div className="bg-slate-300 w-[70%] pb-10 rounded-lg ">
        <h2 className="text-[30px] font-semibold text-center py-3">
          TODO-LIST
        </h2>
        <form action="" onSubmit={handleSumbit}>
          <div className="flex items-center justify-center pt-10  gap-5">
            <label htmlFor="" className="flex flex-col">
              Title
              <input
                type="text"
                placeholder="Enter title...."
                name="title"
                value={state.title}
                className="pl-2 pr-10 py-2 rounded-lg"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="" className="flex flex-col ">
              Description
              <input
                type="text"
                placeholder="Enter description...."
                name="description"
                value={state.description}
                className="pl-2 pr-10 py-2 rounded-lg"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="" className="flex flex-col">
              Type
              <input
                type="text"
                placeholder="Enter type..."
                className="pl-2 pr-10 py-2 rounded-lg"
                name="type"
                value={state.type}
                onChange={handleChange}
              />
            </label>
            <div className="pt-5">
              <button
                type="submit"
                className="px-8 py-2 bg-green-600 rounded-xl text-white text-md font-semibold"
              >
                Add
              </button>
            </div>
          </div>
        </form>
        <Tabs data={todoData} next={next} categoryNo={categoryNo} />
        {rederCategory()}
      </div>
    </div>
  );
}
