import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = (state) => {
  return {
    isPractice: state.header.isPractice
  };
};

const HeaderContainer = connect(
  mapStateToProps
)(Header);

export default HeaderContainer;