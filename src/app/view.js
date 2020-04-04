import m from "mithril"

export const App = {
  view: ({ attrs: { state, actions } }) =>
    m(".app",
    m("h1", state.title),
    m("input[type=text]", {
      value: state.someInput,
      oninput: evt => actions.changeInput("someInput", evt.target.value)
    }),
    m("button", { onclick: () => actions.buttonClick(state) }, "click me")
    )
}
