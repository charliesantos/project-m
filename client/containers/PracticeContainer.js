import { connect } from 'react-redux';
import { updateQIndex } from '../actions';
import Practice from '../components/Practice';

const mapStateToProps = (state) => {
  return {
    questions: state.practice.questions,
    q_index: state.practice.q_index
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateQIndex: (index) => {
      dispatch(updateQIndex(index));
    }
  };
};

const PracticeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Practice);

export default PracticeContainer;