import { useStateValue } from 'awai-react';
import { FunctionComponent } from 'react';

import { toolState } from '../../state';

import Line from './Line';
import Pencil from './Pencil';
import Rectangle from './Rectangle';

const Config: FunctionComponent = () => {
  const tool = useStateValue(toolState);

  return (
    <div className="config">
      {tool === 'line' && <Line />}
      {tool === 'pencil' && <Pencil />}
      {tool === 'rectangle' && <Rectangle />}
    </div>
  );
};

export default Config;
