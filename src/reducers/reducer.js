export default (state, action) => {
  switch (action.type) {
    case "user":
      return {
        currentUser: action.payload,
      };
    case "darkmode":
      return {
        isDark: action.payload,
      };
    case "employee":
      return {
        employeeData: action.payload,
      };
    case "counter":
      return {
        counter: action.payload,
      };
    default:
      return state;
  }
};
