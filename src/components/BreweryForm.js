import React from "react";
import { Link } from "react-router-dom";

class BreweryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.brewery.title,
      name: this.props.brewery.artist.name,
      birthday: this.props.brewery.artist.birthday,
      deathday: this.props.brewery.artist.deathday
    };
  }

  onSave = e => {
    e.preventDefault();
    let info = {
      breweryId: this.props.brewery.id,
      title: this.state.title,
      name: this.state.name,
      birthday: this.state.birthday,
      deathday: this.state.deathday
    };
    this.props.updateBreweryInfo(info);
  };

  render() {
    return (
      <div className="ui centered card">
        <div>
          <img
            alt={this.props.brewery.title}
            src={this.props.brewery.image}
          />
        </div>
        <form className="ui form" onSubmit={this.onSave}>
          <input
            className="ui field"
            name="title"
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
          />
          <input
            className="ui field"
            name="artists-name"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            className="ui field"
            name="birthday"
            value={this.state.birthday}
            onChange={e => this.setState({ birthday: e.target.value })}
          />
          <input
            className="ui field"
            name="deathday"
            value={this.state.deathday}
            onChange={e => this.setState({ deathday: e.target.value })}
          />
          <Link to={`/breweries/${this.props.brewery.id}`}>
            <button className="ui button" type="button">
              Cancel
            </button>
          </Link>
          <button className="ui button" type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BreweryForm;
