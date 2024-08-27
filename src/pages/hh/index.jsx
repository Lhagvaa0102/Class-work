import { useState } from "react";

export default function Task() {
  const objectList = [
    { title: "HTML Article 6", tag: "html" },
    { title: "CSS Basics 6", tag: "css" },
    { title: "HTML Article 2", tag: "html" },
    { title: "CSS Basics 3", tag: "css" },
    { title: "HTML Article 3", tag: "html" },
    { title: "JavaScript Guide 3", tag: "javascript" },
    { title: "CSS Basics 4", tag: "css" },
    { title: "JavaScript Guide 1", tag: "javascript" },
    { title: "HTML Article 4", tag: "html" },
    { title: "CSS Basics 1", tag: "css" },
    { title: "JavaScript Guide 4", tag: "javascript" },
    { title: "HTML Article 1", tag: "html" },
    { title: "CSS Basics 2", tag: "css" },
    { title: "HTML Article 5", tag: "html" },
    { title: "JavaScript Guide 2", tag: "javascript" },
    { title: "CSS Basics 5", tag: "css" },
    { title: "JavaScript Guide 6", tag: "javascript" },
    { title: "HTML Article 7", tag: "html" },
    { title: "CSS Basics 7", tag: "css" },
    { title: "JavaScript Guide 5", tag: "javascript" },
  ];

  const [value, setValue] = useState("");
  const changeValue = (event) => {
    setValue(event.target.value);
  };
  const filteredHtml = objectList.filter((list) => list.tag === value);
  return (
    <div>
      <select name="" onChange={changeValue} id="">
        <option></option>
        <option value="javascript">javascript</option>
        <option value="html">html</option>
        <option value="css">css</option>
      </select>
      <div>
        {" "}
        {filteredHtml.map((list) => {
          return <div>{list.title}</div>;
        })}
      </div>
    </div>
  );
}
