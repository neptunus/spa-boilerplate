import merge from "mergerino"
import m from "mithril"
import stream from "mithril/stream"

import { app, App } from "./app"

const update = stream();
const states = stream.scan(merge, app.initial, update);
var actions = app.Actions(update);

m.mount(document.getElementById("app"), {
  view: () => m(App, { state: states(), actions })
})
