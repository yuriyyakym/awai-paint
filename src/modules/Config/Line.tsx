import { useStateValue } from 'awai-react';
import { type FunctionComponent } from 'react';

import { lineConfigState, setLineConfig } from '../../state';
import { type LineConfig } from '../../types';

const Line: FunctionComponent = () => {
  const config = useStateValue(lineConfigState);

  const handleConfigUpdate = (patch: Partial<LineConfig>) => {
    setLineConfig((config) => ({ ...config, ...patch }));
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

export default Line;
