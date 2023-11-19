import { useStateValue } from 'awai-react';
import { FunctionComponent } from 'react';

import { setToolConfig, toolState, toolsConfigsFamily } from '../../state';
import { Layer } from '../../types';

const Config: FunctionComponent = () => {
  const tool = useStateValue(toolState);
  const config = useStateValue(toolsConfigsFamily.getNode(tool));

  const handleConfigUpdate = (patch: Partial<Layer['config']>) => {
    setToolConfig(tool, { ...config, ...patch });
  };

  return (
    <div className="config">
      {'color' in config && (
        <label>
          <input
            type="color"
            onChange={(event) => handleConfigUpdate({ color: event.target.value })}
            value={config.color}
          />
          Color
        </label>
      )}

      {'borderColor' in config && (
        <label>
          <input
            type="color"
            onChange={(event) => handleConfigUpdate({ borderColor: event.target.value })}
            value={config.borderColor}
          />
          Border color
        </label>
      )}

      {'borderWidth' in config && (
        <label>
          <input
            type="number"
            min={0}
            max={50}
            onChange={(event) =>
              handleConfigUpdate({ borderWidth: parseInt(event.target.value, 10) })
            }
            value={config.borderWidth}
          />
          Border width
        </label>
      )}

      {'lineWidth' in config && (
        <label>
          <input
            type="number"
            min={0}
            max={50}
            onChange={(event) =>
              handleConfigUpdate({ lineWidth: parseInt(event.target.value, 10) })
            }
            value={config.lineWidth}
          />
          Line width
        </label>
      )}
    </div>
  );
};

export default Config;
