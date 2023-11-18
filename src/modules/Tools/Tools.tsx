import { FunctionComponent } from 'react';

import { selectTool } from '../../state';

const Tools: FunctionComponent = ({}) => (
  <div className="tools">
    <button onClick={() => selectTool('line')}>Line</button>
    <button onClick={() => selectTool('rectangle')}>Rectangle</button>
    <button onClick={() => selectTool('pencil')}>Pencil</button>
  </div>
);

export default Tools;
