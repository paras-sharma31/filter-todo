import React, { useState } from "react";

const useAuth = () => {
  const [state, setState] = useState({
    title: "",
    description: "",
    type: "",
  });
  const [todoData, setTodoData] = useState<Array<typeof state>>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };
  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state) {
      setTodoData((prev) => [...prev, state]);
    }
    setState({
      title: "",
      description: "",
      type: "",
    });
  };

  return {
    state,
    handleChange,
    handleSumbit,
    todoData,
    setTodoData,
    setState,
  };
};

export default useAuth;
