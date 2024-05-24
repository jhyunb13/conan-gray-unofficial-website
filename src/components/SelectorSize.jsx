import propTypes from "prop-types";
import styles from "./SelectorSize.module.css";

function SelectorSize({
  soldOut,
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
    <form className={`${styles.sizeSelector} mt-20`}>
      <div className="selector-title">Size</div>
      <div className={styles.size}>
        {sizeOptions.map((option) => {
          return (
            <div id={`size-${option}`} key={option}>
              {soldOut ? (
                <label
                  className={`${styles.sizeOption} inactive`}
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
                      ? `${styles.sizeOption} ${styles.sizeSelected}`
                      : styles.sizeOption
                  }
                  key={`${option}-active`}
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

SelectorSize.propTypes = {
  soldOut: propTypes.string,
  sizeSelected: propTypes.string,
  setSizeSelected: propTypes.func,
  correspondingData: propTypes.object,
};

export default SelectorSize;
