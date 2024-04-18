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
      <div className="size">
        {sizeOptions.map((option) => {
          return (
            <div key={option}>
              {availability ? (
                <label
                  className={"size-option inactive"}
                  key={`${option}-inactive`}
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
              ) : (
                <label
                  className={
                    sizeSelected === option
                      ? "size-option size-selected"
                      : "size-option"
                  }
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
              )}
            </div>
          );
        })}
      </div>
    </form>
  );
}

export default SizeSelector;
