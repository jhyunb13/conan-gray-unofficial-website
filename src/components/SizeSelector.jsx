function SizeSelector({
  availability,
  sizeSelected,
  setSizeSelected,
  correspondingData,
}) {
  const sizeOptions = ["S", "M", "L", "XL", "2XL"];

  function handleSizeSelection(e) {
    correspondingData.title.includes("TEE") ||
    correspondingData.title.includes("SWEATER") ||
    correspondingData.title.includes("HOODIE")
      ? setSizeSelected(e.target.value)
      : null;
  }

  return (
    <form className="size-selector mt-20">
      <div>size</div>
      {sizeOptions.map((option) => {
        return (
          <label
            className={
              sizeSelected === option
                ? "size-option size-selected"
                : "size-option"
            }
            key={option}
          >
            <input
              type="radio"
              name="size"
              value={option}
              onClick={handleSizeSelection}
              defaultChecked={option === "S"}
            />
            <div>{option}</div>
          </label>
        );
      })}
    </form>
  );
}

export default SizeSelector;
