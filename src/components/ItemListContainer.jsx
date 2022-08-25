import React from "react";

class ItemListContainer extends React.Component {
  render() {
    return (
      <div className="container-fluid badge bg-dark text-wrap fs-1">
        {this.props.title}
      </div>
    );
  }
}

export default ItemListContainer;
