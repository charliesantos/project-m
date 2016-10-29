import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Home from '../components/Home';

const mapStateToProps = (state) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPracticeClick: (isPractice) => {
      browserHistory.push('/practice');
    }
  };
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;