import { useStateValue } from 'awai-react';
import { FunctionComponent } from 'react';

import { selectTool, toolState } from '../../state';

const Tools: FunctionComponent = ({}) => {
  const tool = useStateValue(toolState);

  return (
    <div className="tools">
      <button disabled={tool === 'line'} onClick={() => selectTool('line')}>
        Line
      </button>

      <button disabled={tool === 'rectangle'} onClick={() => selectTool('rectangle')}>
        Rectangle
      </button>

      <button disabled={tool === 'pencil'} onClick={() => selectTool('pencil')}>
        Pencil
      </button>
    </div>
  );
};

export default Tools;
