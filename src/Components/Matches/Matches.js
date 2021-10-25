import React from "react";
import { connect } from "react-redux";
import { userMatches } from "../../ducks/matchReducer";

function Matches() {
  return (
    <div className="Matches">
      <h1>My Matches</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    matches: state.matches,
  };
};
export default connect(mapStateToProps, { userMatches })(Matches);
