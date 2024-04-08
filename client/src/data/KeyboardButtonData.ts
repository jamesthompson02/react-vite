import { ButtonProps } from "../models/components/Button";

export const keyboardButtonData: ButtonProps[] = [
  {
    text: "C",
    func: function (value?: string) {
      value = value || this.text;
      console.log(value);
    },
    type: "clear",
  },
  {
    text: "+/-",
    func: function (value?: string) {
      value = value || this.text;
      console.log(value);
    },
    type: "reverse",
  },
  {
    text: "%",
    func: function (value?: string) {
      value = value || this.text;
      console.log(value);
    },
    type: "percentage",
  },
  {
    text: "/",
    func: function (value?: string) {
      value = value || this.text;
      console.log(value);
    },
    type: "operator",
  },
  {
    text: "7",
    func: function (value?: string) {
      value = value || this.text;
      console.log(value);
    },
    type: "numeric",
  },
  {
    text: "8",
    func: function (value?: string) {
      value = value || this.text;
      console.log(value);
    },
    type: "numeric",
  },
  {
    text: "9",
    func: function (value?: string) {
      value = value || this.text;
      console.log(value);
    },
    type: "numeric",
  },
  {
    text: "*",
    func: function (value?: string) {
      value = value || this.text;
      console.log(value);
    },
    type: "operator",
  },
  {
    text: "4",
    func: function (value?: string) {
      value = value || this.text;
      console.log(value);
    },
    type: "numeric",
  },
  {
    text: "5",
    func: function (value?: string) {
      value = value || this.text;
      console.log(value);
    },
    type: "numeric",
  },
  {
    text: "6",
    func: function (value?: string) {
      value = value || this.text;
      console.log(value);
    },
    type: "numeric",
  },
  {
    text: "-",
    func: function (value?: string) {
      value = value || this.text;
      console.log(value);
    },
    type: "operator",
  },
  {
    text: "1",
    func: function (value?: string) {
      value = value || this.text;
      console.log(value);
    },
    type: "numeric",
  },
  {
    text: "2",
    func: function (value?: string) {
      value = value || this.text;
      console.log(value);
    },
    type: "numeric",
  },
  {
    text: "3",
    func: function (value?: string) {
      value = value || this.text;
      console.log(value);
    },
    type: "numeric",
  },
  {
    text: "+",
    func: function (value?: string) {
      value = value || this.text;
      console.log(value);
    },
    type: "operator",
  },
  {
    text: "0",
    func: function (value?: string) {
      value = value || this.text;
      console.log(value);
    },
    type: "numeric",
    cssClasses: ["two-column-button"],
  },
  {
    text: ".",
    func: function (value?: string) {
      value = value || this.text;
      console.log(value);
    },
    type: "numeric",
  },
  {
    text: "=",
    func: function (value?: string) {
      value = value || this.text;
      console.log(value);
    },
    type: "calculate",
  },
];
