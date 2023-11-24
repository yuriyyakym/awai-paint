import { useStateValue } from 'awai-react';
import { type FunctionComponent } from 'react';

import { pencilConfigState, setPencilConfig } from '../../state';
import { type CurveConfig } from '../../types';

const Pencil: FunctionComponent = () => {
  const config = useStateValue(pencilConfigState);

  const handleConfigUpdate = (patch: Partial<CurveConfig>) => {
    setPencilConfig((config) => ({ ...config, ...patch }));
  };

  return (
    <div className="config">
      <label>
        <input
          type="color"
          onChange={(event) => handleConfigUpdate({ color: event.target.value })}
          value={config.color}
        />
        Color
      </label>

      <label>
        <input
          type="number"
          min={0}
          max={50}
          onChange={(event) => handleConfigUpdate({ lineWidth: parseInt(event.target.value, 10) })}
          value={config.lineWidth}
        />
        Line width
      </label>
    </div>
  );
};

export default Pencil;
