import React, { useState, useEffect } from "react";
import Grid from "./Grid";
import fetchData from "./Problem";

const data = [
  {
    name: "First Level 1",
    children: [
      {
        name: "Second Level 1-1",
        children: [{ name: "Third Level 1-1-1" }, { name: "Third Level 1-1-2" }],
      },
      {
        name: "Second Level 1-2",
        children: [{ name: "Third Level 1-2-1" }, { name: "Third Level 1-2-2" }],
      },
    ],
  },
  {
    name: "First Level 2",
    children: [
      {
        name: "Second Level 2-1",
        children: [
          {
            name: "Third Level 2-1-1",
            children: [
              { name: "Fourth Level 2-1-1-1" },
              { name: "Fourth Level 2-1-1-2" },
              { name: "Fourth Level 2-1-1-3" },
              { name: "Fourth Level 2-1-1-4" },
            ],
          },
          { name: "Third Level 2-1-2" },
        ],
      },
    ],
  },
];

const NestedList = ({ data }) => {
  const [openLevels, setOpenLevels] = useState({});

  const toggleLevel = (levelKey) => {
    setOpenLevels((prevState) => ({
      ...prevState,
      [levelKey]: !prevState[levelKey],
    }));
  };

  const renderList = (items, levelKey = "") => (
    <ul>
      {items?.map((item, index) => {
        const currentKey = `${levelKey}${index}`;

        return (
          <li key={currentKey}>
            <span onClick={() => item.children && toggleLevel(currentKey)}>{item.name}</span>
            {item.children && openLevels[currentKey] && renderList(item.children, `${currentKey}-`)}
          </li>
        );
      })}
    </ul>
  );

  return <div>{renderList(data)}</div>;
};

const App = () => {
  const [parentData, setParentData] = useState(null);

  useEffect(() => {
    fetchData().then((data) => setParentData(data));
  }, []);

  return (
    <div>
      <h1>Nested List</h1>
      <NestedList data={parentData} />
      <Grid />
    </div>
  );
};

export default App;
