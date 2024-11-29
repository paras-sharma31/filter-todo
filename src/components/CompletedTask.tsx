import { useEffect, useState } from "react";

interface Props {
  title: string;
  description: string;
  type: string;
}

export default function CompletedTask() {
  const [CompleteTodo, setCompleteTodo] = useState<Props[]>([]);
  useEffect(() => {
    const completeTask = localStorage.getItem("completeTask");
    if (completeTask) {
      const tasks = JSON.parse(completeTask);
      setCompleteTodo(tasks);
    }
  }, []);
  return (
    <div className="flex flex-col items-center mt-16">
      <div className="grid gap-4">
        {CompleteTodo.length > 0 ? (
          CompleteTodo.map((item, index) => (
            <div
              key={index}
              className="bg-green-600 p-4 rounded-md flex flex-col  gap-2 text-white"
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
