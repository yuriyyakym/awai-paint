# Awai - Paint

### [Demo](https://awai-paint.vercel.app) | [Playground](https://codesandbox.io/p/github/yuriyyakym/awai-paint/master)

_Complexity: Medium_

_Uses: [State](https://awai.js.org/state), [Action](https://awai.js.org/action), [Scenario](https://awai.js.org/scenario)_

---

Basic painting application implementation to demonstrate how to write logics declaratively by composing actions and scenarios using [Awai](https://awai.js.org) state management library.

This project is also a proof that Awai works great with real-time actions.

## Important files:
- [App.tsx](./src/App.tsx)
- State
  - [state.ts](./src/state/state.ts)
  - [actions.ts](./src/state/actions.ts)
  - Scenarios
    - [draw-line.ts](./src/state/scenarios/draw-line.ts)
    - [draw-pencil.ts](./src/state/scenarios/draw-pencil.ts)
    - [draw-rectangle.ts](./src/state/scenarios/draw-rectangle.ts)
    - [render.ts](./src/state/scenarios/render.ts)
    - [start-drawing.ts](./src/state/scenarios/start-drawing.ts)
