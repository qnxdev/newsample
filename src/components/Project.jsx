export const Project = ({ id }) => {
  console.log("id");
  let d = new Date();
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
  const currentProject = projectList[id];

  if (currentProject) {
    return (
      <div>
        <br/>
        {currentProject.name}
      </div>
    );
  } else {
    return "Invalid Project ID";
  }
};
