import React from "react";
import Button from "../elements/button";
import { showFormattedDate } from "../../utils";

class Card extends React.Component {
    render() {
        const { id, title, body, createdAt, archived, onDelete, onArchive } = this.props;

        return (
            <div className="note-item">
                <div className="note-item__content">
                    <h3 className="note-item__title">{title}</h3>
                    <p className="note-item__date">{showFormattedDate(createdAt)}</p>
                    <p className="note-item__body">{body}</p>
                </div>
                <div className="note-item__action">
                    <Button onClick={() => onDelete(id)}>Delete</Button>
                    <Button onClick={() => onArchive(id)}>Arsipkan</Button>
                </div>
            </div>
        );
    }
}

export default Card;
