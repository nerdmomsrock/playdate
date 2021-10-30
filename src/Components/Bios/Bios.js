import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { userMatches } from '../../ducks/matchReducer';
import { connect } from 'react-redux';

import './bios.css';

function Bios(props) {
  const [bios, setBios] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/profiles`)
      .then((response) => {
        setBios([...response.data]);
      })
      .catch((err) => console.log(err, 'error in the axios call'));

    // setMatches or setBios([...props.matches])
  }, []);

  console.log(test);

  return (
    <div className="Bios">
      <h1>Bios</h1>
      <p>Here</p>
      <div className="box">
        {bios.map((val) => {
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
              <button
                onClick={() => {
                  props.userMatches({
                    first_name: val.first_name,
                    email: val.email,
                    your_kids: val.your_kids,
                    gender: val.gender,
                    favorite_food: val.favorite_food,
                    embarrassing_moment: val.embarrassing_moment,
                  });
                }}
              >
                Add to matches
              </button>
            </div>
          );
        })}
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

export default connect(mapStateToProps, { userMatches })(Bios);
