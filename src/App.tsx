import { FunctionComponent } from 'react';

import { getEventPoint } from './lib';
import { canvasElementState, draw, startDrawing, stopDrawing } from './state';
import Config from './modules/Config';
import Tools from './modules/Tools';

const App: FunctionComponent = () => (
  <div className="app">
    <canvas
      ref={canvasElementState.set}
      width={800}
      height={600}
      onMouseDown={(event) => startDrawing(getEventPoint(event))}
      onMouseMove={(event) => draw(getEventPoint(event))}
      onMouseUp={(event) => stopDrawing(getEventPoint(event))}
    />

    <Tools />
    <Config />
  </div>
);

export default App;
