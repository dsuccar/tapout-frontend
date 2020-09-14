import React from "react";
import { Link } from "react-router-dom";

class BreweryDetail extends React.Component {
  render() {
    return (
      <div>
        <img alt={this.props.brewery.title} src={this.props.brewery.image} />
        <h3>{this.props.brewery.title}</h3>
        <h4>
          {this.props.brewery.artist.name}{" "}
          {this.props.brewery.artist.birthday}-{
            this.props.brewery.artist.deathday
          }
        </h4>
        <Link to={`/breweries/${this.props.brewery.id}/edit`}>
          <button className="ui button">Edit</button>
        </Link>
        <button
          className="ui button"
          onClick={() => {this.props.vote(this.props.brewery.id)}}
        >
          Vote! {this.props.brewery.votes}
        </button>
      </div>
    );
  }
}

export default BreweryDetail;
