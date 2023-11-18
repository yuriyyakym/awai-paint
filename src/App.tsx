import { FunctionComponent } from 'react';

import { canvasElementState, draw, startDrawing, stopDrawing } from './state';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <canvas
        ref={canvasElementState.set}
        width={500}
        height={500}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
      />
    </div>
  );
};

export default App;
