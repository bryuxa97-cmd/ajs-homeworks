export default function orderByProps(obj, order) {
  const result = [];
  const remaining = [];

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (!order.includes(key)) {
        remaining.push(key);
      }
    }
  }

  remaining.sort();

  for (const key of order) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result.push({ key, value: obj[key] });
    }
  }

  for (const key of remaining) {
    result.push({ key, value: obj[key] });
  }

  return result;
}
