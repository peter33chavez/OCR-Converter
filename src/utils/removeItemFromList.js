

const removeItemFromList = (id, list, setSavedFiles) => {
  const newList = list.filter(item => item.id !== id);
  setSavedFiles(newList);
}

export default removeItemFromList