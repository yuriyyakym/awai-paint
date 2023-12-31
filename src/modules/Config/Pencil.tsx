import { useStateValue } from 'awai-react';
import { type FunctionComponent } from 'react';

import { pencilConfigState, setPencilConfig } from '../../state';
import { type PencilConfig } from '../../types';

const Pencil: FunctionComponent = () => {
  const { color, lineWidth } = useStateValue(pencilConfigState);

  const handleConfigUpdate = (patch: Partial<PencilConfig>) => {
    setPencilConfig((config) => ({ ...config, ...patch }));
  };

  return (
    <div className="config">
      <label>
        <input
          type="color"
          onChange={(event) => handleConfigUpdate({ color: event.target.value })}
          value={color}
        />
        Color
      </label>

      <label>
        <input
          type="number"
          min={0}
          max={50}
          onChange={(event) => handleConfigUpdate({ lineWidth: parseInt(event.target.value, 10) })}
          value={lineWidth}
        />
        Line width
      </label>
    </div>
  );
};

export default Pencil;
