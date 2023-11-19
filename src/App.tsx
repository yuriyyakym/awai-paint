import { FunctionComponent } from 'react';

import { canvasElementState, draw, startDrawing, stopDrawing } from './state';
import Config from './modules/Config';
import Tools from './modules/Tools';

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <canvas
        ref={canvasElementState.set}
        width={800}
        height={600}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
      />

      <Tools />
      <Config />
    </div>
  );
};

export default App;
