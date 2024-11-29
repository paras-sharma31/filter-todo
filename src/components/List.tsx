import { RiDeleteBin6Fill } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { useEffect, useState } from "react";

interface Props {
  data: any;
  setTodoData: any;
}
export default function List({ data, setTodoData }: Props) {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [CompleteTask, setCompleteTask] = useState<Array<typeof data>>([]);
  const [deleteTask, setDeleteTask] = useState<Array<typeof data>>([]);

  const handleDelte = (index: number) => {
    setTodoData((prev: any) => prev.filter((_: any, i: number) => i !== index));
  };
  const handleDeleteTask = (index: number) => {
    setDeleteTask((prev) => [...prev, data[index]]);
    handleDelte(index);
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const updatedList = [...data];
    updatedList[index] = { ...updatedList[index], [name]: value };
    setTodoData(updatedList);
  };

  const handleCompleted = (index: number) => {
    if (data) {
      setCompleteTask((prev) => [...prev, data[index]]);
      handleDelte(index);
    }
  };

  if (CompleteTask.length > 0) {
    localStorage.setItem("completeTask", JSON.stringify(CompleteTask));
  }
  console.log(CompleteTask);
  useEffect(() => {
    if (deleteTask.length > 0) {
      localStorage.setItem("deleteTask", JSON.stringify(deleteTask));
      console.log("Saved to localStorage:", deleteTask);
    }
  }, [deleteTask]);
  return (
    <div>
      {" "}
      <div className=" flex justify-center gap-5 mt-10">
        <div className="flex  flex-col items-center  p-2">
          {data.map((item: any, index: number) => (
            <div
              className="flex p-3 rounded-lg  my-4 items-center bg-[#fff]"
              key={index}
            >
              <input
                type="text"
                name="title"
                value={item?.title}
                className="text-md font-semibold pl-2 pr-10 py-2 rounded-lg"
                disabled={editingIndex !== index}
                onChange={(e) => handleChange(e, index)}
              />
              <input
                type="text"
                name="description"
                value={item?.description}
                className="pl-2 pr-10 py-2 rounded-lg"
                disabled={editingIndex !== index}
                onChange={(e) => handleChange(e, index)}
              />

              <input
                type="text"
                name="type"
                value={item?.type}
                className="pl-2 pr-10 py-2 rounded-lg"
                disabled={editingIndex !== index}
                onChange={(e) => handleChange(e, index)}
              />
              <button className="px-3 py-2" onClick={() => handleEdit(index)}>
                <RiEdit2Fill fill="blue" size={"20px"} />
              </button>
              <button className="px-3 py-2">
                <FaCheck
                  fill="green"
                  size={"20px"}
                  onClick={() => handleCompleted(index)}
                />
              </button>
              <button
                className="px-3 py-2"
                onClick={() => handleDeleteTask(index)}
              >
                <RiDeleteBin6Fill fill="red" size={"20px"} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
