import { useState } from "react";
export const Apple = () => {
  const arrays = ["apple", "apple", "apple", "orange", "banana", "cherry"];
  const [input, setInput] = useState("");
  const filteredarray = arrays.filter((array) => array === input);

  return (
    <div>
      <input
        className="w-[80px] h-[30px] border "
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {filteredarray.map((array) => {
        return <div>{array}</div>;
      })}
    </div>
  );
};
