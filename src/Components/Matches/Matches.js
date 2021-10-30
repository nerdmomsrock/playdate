import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { userMatches } from '../../ducks/matchReducer';

function Matches(props) {
  // const [bios, setBios] = useState([]);

  // useEffect(() => {
  //   setBios(...props.matches);
  // }, []);

  return (
    <div className="Matches">
      <h1>My Matches</h1>
      {/* {bios.map((val) => {
        return (
          <div className="card">
            <ul>
              <li>{val.first_name}</li>
              <li>{val.email}</li>
              <li>{val.your_kids}</li>
              <li>{val.gender}</li>
              <li>{val.favorite_food}</li>
              <li>{val.embarrassing_moment}</li>
            </ul>
          </div>
        );
      })} */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    matches: state.matches,
    // state.matches = [{}, {}]
  };
};
export default connect(mapStateToProps, { userMatches })(Matches);
