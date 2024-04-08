export interface ButtonProps {
  func: (value?: any) => any;
  text: string;
  cssClasses?: string[];
  type?: string;
}
