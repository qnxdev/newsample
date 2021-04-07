import { FunctionComponent } from "react";
import { ComponentProps } from "../typescript/pages";

export const Project: FunctionComponent<ComponentProps> = ({ id }) => {
  let d: Date = new Date();
  type list = Array<{
    id: string;
    name: string;
  }>;

  const projectList = [
    {
      id: "1",
      name: "Project1",
    },
    {
      id: "2",
      name: "Project2",
    },
    {
      id: "3",
      name: "Project3",
    },
  ];

  let currentProject = projectList[id];

  if (currentProject) {
    return (
      <div>
        <br />
        {currentProject.name}
      </div>
    );
  } else {
    return <div>"Invalid Project ID"</div>;
  }
};
