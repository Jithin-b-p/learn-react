import Folder from "./components/Folder";
import explorer from "../data/folderData";
import "./styles.css";
import { useState } from "react";
import useTraverseFileTree from "./hooks/useTraverseFile";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNewFileOrFolder } = useTraverseFileTree();

  const onNewCreation = (id, name, isFolder) => {
    const newFileTree = insertNewFileOrFolder(explorerData, id, name, isFolder);

    setExplorerData(newFileTree);
  };
  return <Folder explorer={explorerData} handleNewCreation={onNewCreation} />;
}
