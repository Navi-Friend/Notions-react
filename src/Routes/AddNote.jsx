import { useContext, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Components/userContext";
import useNotes from "../hooks/useNotes";

export default function ReadNote({ noteUUID }) {
    const userContext = useContext(UserContext);
    const navigate = useNavigate();

    // const [notes, addNote, deleteNote] = useNotes(userContext.user.id);

    const note = useMemo(() => {
        notes.filter((note) => note.uuid === noteUUID);
    });


    const handleDeleteNote = () => {
        deleteNote(note.uuid);
        navigate("/notes");
    };

    return (
        <div className="text-2xl flex flex-col gap-3 items-center w-1/2">
            <h1 className="text-4xl">{note.title}</h1>
            <div className="flex w-full justify-between">
                <Link
                    to="/notes"
                    className="justify-self-start bg-gray-400 p-1.5 rounded">
                    Back
                </Link>
                <div>
                    <Link to={`/edit-note/${note.uuid}`} className="mr-4">
                        ✍️
                    </Link>
                    <button onClick={handleDeleteNote} className="text-red-500">
                        🗑
                    </button>
                </div>
            </div>
            <div className="border p-3 w-full h-52">{note.description}</div>
        </div>
    );
}
