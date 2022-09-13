import { getNextKeyDef } from "@testing-library/user-event/dist/keyboard/getNextKeyDef";

export const reducer = (state, action) => {
  if (action.type === "CHECK_BILL_INPUT") {
    const input = action.payload.current.value;
    const parsedInput = handleNumberInput(input);

    console.log(parsedInput);
    if (parsedInput !== null) {
      return { ...state, bill: parsedInput };
    }
    return state;
  }
};

const handleNumberInput = (string) => {
  const regex = /\d+(\.\d{1,4})?/g;

  if (regex.test(string)) return parseInt(string);

  return null;
};
