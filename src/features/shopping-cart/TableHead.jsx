import propTypes from "prop-types";

function TableHead({ category }) {
  return (
    <thead>
      <tr>
        {category.map((item) => (
          <th key={item}>{item}</th>
        ))}
      </tr>
    </thead>
  );
}

TableHead.propTypes = {
  category: propTypes.array,
};

export default TableHead;
