import { useEffect, useState } from "react";

interface Props {
  title: string;
  description: string;
  type: string;
}

export default function DeletedTask() {
  const [deleteTask, setDeleteTask] = useState<Props[]>([]);
  useEffect(() => {
    const task = localStorage.getItem("deleteTask");
    if (task) {
      const deleteValue = JSON.parse(task);
      setDeleteTask(deleteValue);
    }
  }, []);
  console.log(deleteTask);
  return (
    <div className="flex flex-col items-center mt-16">
      <div className="grid gap-4">
        {deleteTask.length > 0 ? (
          deleteTask.map((item, index) => (
            <div
              key={index}
              className="bg-red-600 p-4 rounded-md flex flex-col  gap-2 text-white"
            >
              <p>
                <strong>Title:</strong> {item.title}
              </p>
              <p>
                <strong>Description:</strong> {item.description}
              </p>
              <p>
                <strong>Type:</strong> {item.type}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No completed tasks found.</p>
        )}
      </div>
    </div>
  );
}
