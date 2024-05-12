/* eslint-disable no-unused-vars */
const useTraverseFileTree = () => {
  const insertNewFileOrFolder = (fileTree, id, name, isFolder) => {
    if (!fileTree.isFolder) {
      return { ...fileTree };
    }
    if (fileTree.id === id && fileTree.isFolder) {
      const newFileOrFolder = {
        id: new Date().getTime(),
        isFolder,
        name,
        items: [],
      };

      fileTree.items.push(newFileOrFolder);
      return fileTree;
    }

    let newTree = fileTree.items.map((item) =>
      insertNewFileOrFolder(item, id, name, isFolder)
    );

    return { ...fileTree, items: newTree };
  };

  return { insertNewFileOrFolder };
};

export default useTraverseFileTree;
