import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class AboutView extends Component {
  render() {
    return(
      <div>
        <Link
          to="/"
        >
          <button>Home</button>
        </Link>
      </div>
    );
  }
}

export default AboutView;
