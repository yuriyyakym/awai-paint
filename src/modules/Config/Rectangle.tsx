import { useStateValue } from 'awai-react';
import { type FunctionComponent } from 'react';

import { rectangleConfigState, setRectangleConfig } from '../../state';
import { RectangleConfig } from '../../types';

const Rectangle: FunctionComponent = () => {
  const { borderColor, borderWidth, color } = useStateValue(rectangleConfigState);

  const handleConfigUpdate = (patch: Partial<RectangleConfig>) => {
    setRectangleConfig((config) => ({ ...config, ...patch }));
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
          type="color"
          onChange={(event) => handleConfigUpdate({ borderColor: event.target.value })}
          value={borderColor}
        />
        Border color
      </label>

      <label>
        <input
          type="number"
          min={0}
          max={50}
          onChange={(event) =>
            handleConfigUpdate({ borderWidth: parseInt(event.target.value, 10) })
          }
          value={borderWidth}
        />
        Border width
      </label>
    </div>
  );
};

export default Rectangle;
