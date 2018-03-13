import classnames from 'classnames/bind';
import { join } from 'path';
import { UserAgent } from '../../utils';
import style from './index.scss';

export default ({ loading = false }) => {
  const devPath = `file://${join($dirname, 'app', 'dist', 'preload.js')}`; // eslint-disable-line
  const pubPath = '../dist/preload.js';
  return (
    <webview
      id="wv"
      className={classnames.bind(style)('webview', { loading: loading })}
      src="https://screeps.com/a/#!/map"
      useragent={UserAgent.mobile}
      preload={$isDev ? devPath : pubPath} // eslint-disable-line
      disablewebsecurity="true"
    />
  );
};
