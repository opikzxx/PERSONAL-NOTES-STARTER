import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    const searchQuery = event.target.value;
    this.setState({ searchQuery });
    this.props.onSearch(searchQuery); // Pass the search query to the parent component
  }

  render() {
    return (
      <div className="note-app__header">
        <h1>Notes</h1>
        <div className="note-search">
          <input
            type="text"
            placeholder="Cari catatan ..."
            value={this.state.searchQuery}
            onChange={this.handleSearch}
          />
        </div>
      </div>
    );
  }
}

export default Header;
