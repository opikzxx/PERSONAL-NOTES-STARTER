import React from "react";
import Header from "./components/fragments/Header";
import NotesInput from "./components/fragments/NotesInput";
import NotesList from "./components/fragments/NotesList";
import { getInitialData } from "./utils";

class App extends React.Component {
    state = {
        notes: getInitialData(),
        filteredNotes: [],
    };

    onDeleteHandler = (id) => {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes, filteredNotes: [] });
    };

    onArchiveHandler = (id) => {
        this.setState((prevState) => {
            const updatedNotes = prevState.notes.map((note) => {
                if (note.id === id) {
                    return { ...note, archived: !note.archived };
                }
                return note;
            });

            return {
                notes: updatedNotes,
                filteredNotes: [],
            };
        });
    };

    onAddNoteHandler = ({ title, body }) => {
        this.setState((prevState) => ({
            notes: [
                ...prevState.notes,
                {
                    id: +new Date(),
                    title,
                    body,
                    createdAt: new Date(),
                    archived: false,
                },
            ],
        }));
    };

    onSearchHandler = (searchQuery) => {
        const filteredNotes = this.state.notes.filter((note) =>
            note.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        this.setState({ filteredNotes });
    };

    render() {
        const displayNotes =
            this.state.filteredNotes.length > 0
                ? this.state.filteredNotes
                : this.state.notes;

        return (
            <>
                <Header onSearch={this.onSearchHandler} />
                <div className="note-app__body">
                    <div className="note-input">
                        <h2>Buat catatan</h2>
                        <NotesInput addNote={this.onAddNoteHandler} />
                    </div>
                    <NotesList
                        notes={displayNotes}
                        onDeleteHandler={this.onDeleteHandler}
                        onArchiveHandler={this.onArchiveHandler}
                    />
                </div>
            </>
        );
    }
}

export default App;
