import { connect } from 'dva';
import { Loading, Webview, Button, Icon, Navbar, Menu } from '../../components';
import classnames from 'classnames/bind';
import Setting from '../Setting';
import History from './history';
import style from './index.scss';

const State = state => ({
  loading: state.loading.global ? false : state.trigger.loading,
  history: state.history,
});

class Main extends History {
  render() {
    const $ = this.props;
    const S = this.state;

    return (
      <div key="webview" className={classnames.bind(style)('view', { viewAnimation: S.inVideo })}>
        {S.inSetting ? <Setting /> : null}
        <Webview />
      </div>
    );
  }
}

export default connect(State)(Main);
