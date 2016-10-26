import { connect } from 'react-redux';
import { updateUserText } from '../actions';
import Thing from '../components/Thing';

const mapStateToProps = (state) => {
  return {
    userText: state.thing.userText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e) => {
      dispatch(updateUserText(e.target.value));
    }
  };
};

const ThingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Thing);

export default ThingContainer;