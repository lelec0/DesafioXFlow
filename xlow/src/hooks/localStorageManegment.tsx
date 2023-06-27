import { useState, useEffect } from "react";

const useLocalStorageManager = (localStorageName: string) => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const localStorageData = localStorage.getItem(localStorageName);
    const parsedData = localStorageData ? JSON.parse(localStorageData) : [];
    setItems(parsedData);
  }, [localStorageName]);

  const updateLocalStorage = (newItems: any[]) => {
    localStorage.setItem(localStorageName, JSON.stringify(newItems));
    setItems(newItems);
  };

  const addItemToLocalStorage = (item: any) => {
    const newItems = [...items, item];
    updateLocalStorage(newItems);
  };

  const removeItemFromLocalStorage = (item: any) => {
    const newItems = items.filter((prevItem) => prevItem !== item);
    updateLocalStorage(newItems);
  };

  const checkItemInLocalStorage = (item: any): boolean => {
    return items.includes(item);
  };

  const getLocalStorageArray = (): any[] => {
    return items;
  };

  return {
    addItemToLocalStorage,
    removeItemFromLocalStorage,
    checkItemInLocalStorage,
    getLocalStorageArray,
  };
};

export default useLocalStorageManager;

/*
  const localStorageHook = useLocalStorage('myLocalStorage');

  localStorageHook.addItemToLocalStorage('item1');
  localStorageHook.addItemToLocalStorage('item2');

  const localStorageArray = localStorageHook.getLocalStorageArray();
*/
