import { connect } from 'react-redux';
import Header from '../components/Header';
import { browserHistory } from 'react-router';

const mapStateToProps = (state) => {
  return {
    isPractice: state.header.isPractice
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogoClick: () => {
      browserHistory.push('/');
    }
  };
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;