import { connect } from "react-redux";

import {
	setMonthSelectedNext,
	setMonthSelectedPrevious,
} from "../../../../store/diary/actionCreators";
import { RootState, ThunkDispatchT } from "../../../../store/store";
import CalendarNav, { DispatchProps, StateProps } from "./CalendarNav";

const mapStateToProps = (state: RootState): StateProps => ({
	monthSelected: state.diary.monthSelected,
});

const mapDispatchToProps = (dispatch: ThunkDispatchT): DispatchProps => ({
	setMonthSelectedNext: () => dispatch(setMonthSelectedNext()),
	setMonthSelectedPrevious: () => dispatch(setMonthSelectedPrevious()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(CalendarNav);
