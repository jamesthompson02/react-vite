import { createSlice } from "@reduxjs/toolkit";
import { CalculatorState } from "../../models/state/Calculator";
import { UtilsService } from "../../services/utils";

const initState: CalculatorState = {
  firstNumber: null,
  secondNumber: null,
  operator: null,
  result: null,
};

const calculatorSlice = createSlice({
  name: "Calculator",
  initialState: initState,
  reducers: {
    updateFirstNumber: (state, action) => {
      const { payload } = action;
      if (!state.firstNumber) {
        return { ...state, result: null, firstNumber: payload };
      }
      if (
        state.firstNumber[0] === "0" &&
        state.firstNumber.length === 1 &&
        payload !== "."
      ) {
        return { ...state, firstNumber: payload };
      }
      return { ...state, firstNumber: state.firstNumber + payload };
    },
    updateSecondNumber: (state, action) => {
      const { payload } = action;
      if (!state.secondNumber) {
        return { ...state, secondNumber: payload };
      }
      if (
        state.secondNumber[0] === "0" &&
        state.secondNumber.length === 1 &&
        payload !== "."
      ) {
        return { ...state, secondNumber: payload };
      }
      return { ...state, secondNumber: state.secondNumber + payload };
    },
    updateOperator: (state, action) => {
      const { firstNumber, result } = state;
      const { payload } = action;
      if (firstNumber) {
        return { ...state, operator: payload };
      }
      if (result) {
        return { ...state, firstNumber: result, operator: payload };
      }
      if (!result && !firstNumber) {
        return { ...state, firstNumber: "0", operator: payload };
      }
    },
    updateResult: (state) => {
      if (state.firstNumber && state.secondNumber && state.operator) {
        const { firstNumber, secondNumber, operator } = state;
        return {
          ...state,
          result: UtilsService.performCalculation(
            firstNumber,
            secondNumber,
            operator
          ),
          firstNumber: null,
          secondNumber: null,
          operator: null,
        };
      }
      if (state.firstNumber && state.operator) {
        return {
          ...state,
          result: UtilsService.performCalculation(
            state.firstNumber,
            state.operator,
            state.firstNumber
          ),
        };
      }
    },
    clear: (state) => {
      state = initState;
      return state;
    },
    expressAsPercentage: (state) => {
      const { firstNumber, result } = state;
      if (firstNumber) {
        return {
          ...state,
          result: UtilsService.performCalculation(firstNumber, "100", "/"),
        };
      }
      if (result) {
        return {
          ...state,
          result: UtilsService.performCalculation(result, "100", "/"),
        };
      }
    },
    reverseSign: (state) => {
      const { firstNumber, result } = state;
      if (firstNumber && Math.abs(parseFloat(firstNumber))) {
        return {
          ...state,
          result: UtilsService.performCalculation(firstNumber, "-1", "*"),
          firstNumber: null,
        };
      }
      if (result && Math.abs(parseFloat(result))) {
        return {
          ...state,
          result: UtilsService.performCalculation(result, "-1", "*"),
        };
      }
    },
  },
});

export const {
  updateFirstNumber,
  updateSecondNumber,
  updateOperator,
  updateResult,
  clear,
  expressAsPercentage,
  reverseSign,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
