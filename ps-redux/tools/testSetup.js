/**
 * This is setup needed by enzyme, it needs adapter to play
 */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
