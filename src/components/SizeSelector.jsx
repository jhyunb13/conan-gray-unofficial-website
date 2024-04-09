import { useState } from "react";

function SizeSelector() {
  const [sizeSelected, setSizeSelected] = useState("S");
  const sizeOptions = ["S", "M", "L", "XL", "2XL"];

  function handleSizeSelection(e) {
    setSizeSelected(e.target.value);
  }

  return (
    <form className="size-selector mt-20">
      <div>size</div>
      {sizeOptions.map((option) => {
        return (
          <span className="size-option mr-10" key={option}>
            <input
              type="radio"
              name="size"
              value={option}
              onClick={handleSizeSelection}
              defaultChecked={option === "S"}
            />
            <label>{option}</label>
          </span>
        );
      })}
    </form>
  );
}

export default SizeSelector;
