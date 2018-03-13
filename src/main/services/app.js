import { Log } from '../utils';
import { create, getPath } from './window';
import loadMenu from './loadMenu';
import loadIpc from './loadIpc';
import checkUpdate from './checkUpdate';
import Configs from '../configs';

export function init() {
  Log('[app][application] load');
  const opt = {
    name: 'Screeps',
    width: Configs.get('windowsSize')[0],
    height: Configs.get('windowsSize')[1],
    resizable: true,
    backgroundColor: '#000',
  };

  const win = create(opt);
  win.loadURL(getPath());
  checkUpdate();
  loadMenu(win);
  loadIpc(win);
}
