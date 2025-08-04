import { useEffect, useState } from 'react';
import { api } from '../api.js';
import { set } from 'react-hook-form';

export function useTodos(){
    const [todos, setTodos] = useState([]);
  const [filters, setFilters] = useState({});
  const [errorMessage, setErrorMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  async function fetchTodos() {
    setIsLoading(true);
    try {
      const data = await api.todos.getAll(filters);
      setTodos(data);
    }catch(error) {
      setErrorMessage("Fetch failed:", error);
      setTodos([]);
    } finally{
        setIsLoading(false);
    }
}

  useEffect(() => {
    fetchTodos();
  }, [filters]);

  async function handleCreate(newTodo){
    setIsLoading(true);
    try {
      await api.todos.create(newTodo);
      await fetchTodos();
    } catch (error) {
      setErrorMessage("Create failed:", error);
    } finally{
        setIsLoading(false);
    }
  }

  async function handleUpdate(id, updatedTodo) {
    setIsLoading(true);
    try {
      await api.todos.update(id, updatedTodo);
      await fetchTodos();
    } catch (error) {
      setErrorMessage("Update failed:", error);
    } finally{
        setIsLoading(false);
    }
  }

  async function handleDelete(id) {
    setIsLoading(true);
    try {
      await api.todos.delete(id);
      await fetchTodos();
    } catch (error) {
      setErrorMessage("Delete failed:", error);
    } finally{
        setIsLoading(false);
    }
  }


  return {
    isLoading,
    data: todos,
    fetch: fetchTodos,
    filter: setFilters,
    create: handleCreate,
    update: handleUpdate,
    delete: handleDelete,
    error: {
        message: errorMessage,
        clear: () => setErrorMessage(),
    }
  };
}