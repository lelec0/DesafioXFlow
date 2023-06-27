import { useEffect, useState } from "react";

export function useLocalStorage<T>(item: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let value = localStorage.getItem(item);
    if (value) setValue(JSON.parse(value));
  }, [item]);

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  };

  const removeItemFromLocalStorage = () => {
    setValue(initialValue);
    localStorage.removeItem(item);
  };

  const clearLocalStorage = () => {
    setValue(initialValue);
    localStorage.clear();
  };

  return {
    value,
    updateLocalStorage,
    removeItemFromLocalStorage,
    clearLocalStorage,
  };
}
