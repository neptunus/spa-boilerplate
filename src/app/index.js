export const app = {
  initial: {
    title: "drasl",
    someInput: ""
  },
  Actions: update => ({
    changeInput: (field, value) => update({ [field]: value }),
    buttonClick: function(state) {
      var newTitle = state.someInput !== '' ? state.someInput : "TYPE SOMETHING";
      update({ title: newTitle })
    }
  })
}

export { App } from "./view"
