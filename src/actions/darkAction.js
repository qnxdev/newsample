export const darkAction = {
    type: "darkmode",
    payload: true
  };
  
  // actions: these are objects that should have two properties, one describing the type of action, and one describing what should be changed in the app state.
//reducers: these are functions that implement the behavior of the actions. They change the state of the app, based on the action description and the state change description.
//store: it brings the actions and reducers together, holding and changing the state for the whole app — there is only one store.
