import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { userMatches } from "../../ducks/matchReducer";
import "./matches.css";

function Matches(props) {
  const [bios, setBios] = useState([]);

  useEffect(() => {
    console.log("useEffect", props.matches);
    setBios(...bios, props.matches);
  }, []);

  console.log(bios);
  return (
    <div className="Matches">
      <h1>My Matches</h1>
      <div className="box">
        {bios.length > 0
          ? bios.map((val) => {
              return (
                <div className="card">
                  <ul>
                    <li>{val.first_name}</li>

                    <li>{val.your_kids}</li>
                    <li>{val.gender}</li>
                    <li>{val.favorite_food}</li>
                    <li>{val.embarrassing_moment}</li>
                  </ul>
                </div>
              );
            })
          : null}
      </div>
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
