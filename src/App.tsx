import { FunctionComponent } from 'react';

import { canvasElementState, draw, startDrawing, stopDrawing } from './state';
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
    </div>
  );
};

export default App;
