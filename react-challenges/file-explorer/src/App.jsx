import Folder from "./components/Folder";
import explorer from "../data/folderData";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const onNewCreation = ({ id, name, isFolder }) => {};
  return <Folder explorer={explorerData} handleNewCreation={onNewCreation} />;
}
