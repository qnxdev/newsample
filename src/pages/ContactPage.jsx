export default function Contact({ id, children }) {
  const userList = [
    {
      id: "0",
      name: "skdufg",
    },
    {
      id: "1",
      name: "sewrferfufg",
    },
    {
      id: "3",
      name: "rffg",
    },
  ];
  const currentUser = userList[id];

  if (currentUser) {
    return (
      <div>
        {currentUser.name}
        <h1>{children}</h1>
      </div>
    );
  } else {
    return "No user with that id";
  }
}
