export function convertUpperCase(str) {
  return str.toUpperCase();
}

export function trimName(productName) {
  const firstTrim = productName.trim();
  const trimedName = firstTrim.includes("-")
    ? firstTrim.split(" ").slice(0, -2).join(" ")
    : firstTrim;

  return trimedName;
}

export function generateParams(productName) {
  return trimName(productName)
    .toLowerCase()
    .replace("(", "")
    .replace(")", "")
    .split(" ")
    .join("-");
}

export function getUniqueData(data1, data2) {
  return data1
    .concat(data2)
    .filter(
      (obj, i) =>
        i === data1.concat(data2).findIndex((o) => obj.title === o.title)
    );
}

export function sortData(data) {
  const dataIncludingFh = data.filter((data) =>
    data.title.includes(`found heaven`.toUpperCase())
  );
  const dataExcludingFh = data.filter(
    (data) => !data.title.includes(`found heaven`.toUpperCase())
  );

  return dataIncludingFh.concat(dataExcludingFh);
}
