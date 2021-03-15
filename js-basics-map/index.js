export const result = (input) => {
  return Object
          .entries(input)
          .reduce((state, newState) => [...state, ...newState], []);
 };
