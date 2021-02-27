export default (state, action) => {
    switch (action.type) {
      case "darkmode":
        return {
          isDark: action.payload
        };
        case "employee":
          return {
            employeeData: action.payload
          };
      default:
        return state;
    }
  };