import React from "react";
import Card from "./Card";

class NotesList extends React.Component {
    render() {
        const { notes, onDeleteHandler, onArchiveHandler } = this.props;

        const activeNotes = notes.filter((note) => !note.archived);
        const archivedNotes = notes.filter((note) => note.archived);

        return (
            <>
                <h2>Catatan Aktif</h2>

                {activeNotes.length > 0 ? (
                    <div className="notes-list">
                        {activeNotes.map((note) => (
                            <Card
                                key={note.id}
                                {...note}
                                onDelete={() => onDeleteHandler(note.id)}
                                onArchive={() => onArchiveHandler(note.id)}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="notes-list__empty-message">Tidak ada catatan aktif</p>
                )}

                <h2>Arsip</h2>
                {archivedNotes.length > 0 ? (
                    <div className="notes-list">
                        {archivedNotes.map((note) => (
                            <Card
                                key={note.id}
                                {...note}
                                onDelete={() => onDeleteHandler(note.id)}
                                onArchive={() => onArchiveHandler(note.id)}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="notes-list__empty-message">Tidak ada catatan di arsip</p>
                )}
            </>
        );
    }
}

export default NotesList;
