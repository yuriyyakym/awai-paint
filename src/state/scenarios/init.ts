import { scenario } from 'awai';

import { paint } from '../actions';
import { canvasElementState } from '../state';

scenario(canvasElementState.events.changed, paint);
