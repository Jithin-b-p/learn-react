/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Folder({ explorer, handleNewCreation }) {
  const [showFolderContent, setShowFolderContent] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });
  const handleCreation = (e, isFolder) => {
    e.stopPropagation();
    setShowInput({ visible: true, isFolder });
    setShowFolderContent(true);
  };

  const handleAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleNewCreation(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ visible: false, isFolder: null });
    }
  };

  return (
    <div className="foldercontainer">
      <div
        className={`commonstyle ${
          explorer.isFolder ? "folderstyle" : "othersstyle"
        }`}
        onClick={() => setShowFolderContent(!showFolderContent)}
      >
        <span>
          {explorer.isFolder ? "📂" : "📄"}
          {explorer.name}
        </span>
        {explorer.isFolder && (
          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={(e) => handleCreation(e, true)}>Folder +</button>
            <button onClick={(e) => handleCreation(e, false)}>File +</button>
          </div>
        )}
      </div>

      {showFolderContent && (
        <div style={{ paddingLeft: "25px" }}>
          {showInput.visible && (
            <div>
              <span>{showInput.isFolder ? "📂" : "📄"}</span>
              <input
                type="text"
                onBlur={() => setShowInput({ visible: false, isFolder: null })}
                autoFocus
                onKeyDown={handleAddFolder}
              />
            </div>
          )}
          {explorer.items.map((exp) => (
            <Folder
              key={exp.id}
              explorer={exp}
              handleNewCreation={handleNewCreation}
            />
          ))}
        </div>
      )}
    </div>
  );
}
