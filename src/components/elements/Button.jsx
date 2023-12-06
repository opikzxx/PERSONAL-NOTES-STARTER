import React from 'react';

class Button extends React.Component {
  render() {
    const { children, onClick } = this.props;

    const className =
      children === 'Delete'
        ? 'note-item__delete-button'
        : children === 'Arsipkan'
        ? 'note-item__archive-button'
        : '';

    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );
  }
}

export default Button;
