export const updateArray = (numbers) => {
    return numbers.map(num => (num < 0 ? 0 : num));
  };