export interface PageProps {
  darkMode: isDark;
  children: any;
}

export interface ComponentProps {
  id: number;
  children: any;
}

export type isDark = true | false;


interface User {
  age: number;
}

interface User2 {
  gender: string;
}

interface User3 {
  name: string;
}

type userType = User | User2 | User3;

export const userObj: userType = {
  name: "Rohin",
};

function sum(a: number, b: number): Number {
  return a+b;
}
