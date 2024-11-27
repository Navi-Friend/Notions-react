import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Components/userContext";

export default function Notes() {
    const userContext = useContext(UserContext);
    const [notes, setNotes] = useState([
        {
            "title": "Note1",
            "description": "Description1",
            "date": 1732669592760
        },
        {
            "title": "Note2",
            "description": "Description2",
            "date": 1731669592760
        },
        {
            "title": "Note3",
            "description": "Description3",
            "date": 1732466592760
        }
    ]);

    useEffect(() => {
        const sortedNotes = notes.sort((a, b) => b.date - a.date);
        setNotes(sortedNotes);
    }, [userContext.user.notes]);

    const handleDeleteNote = (index) => {
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
        // userContext.setUser({ ...userContext.user, notes: updatedNotes });
    };

    return (
        <Link to="/read-note"
        className="text-2xl flex flex-col gap-3 items-center w-3/4">
            <h1 className="text-5xl mb-10">Notes</h1>
            <Link
                to="/add-note"
                className=" bg-blue-500 text-white font-bold p-3 rounded hover:bg-blue-600 transition duration-200">
                Add new Note
            </Link>
            {notes.map((note, i) => (
                <div key={note.id} className="flex items-center justify-between w-full bg-gray-200 p-2 rounded">
                    <div className="flex justify-center items-center gap-3">
                        <h2>{note.title}</h2>
                        <span className="text-sm text-slate-700">{new Date(note.date).toLocaleDateString()}</span>
                    </div>
                    <div>
                        <Link to="/edit-note" className="mr-4">✍️</Link>
                        <button onClick={() => handleDeleteNote(i)} className="text-red-500">🗑</button>
                    </div>
                </div>
            ))}
        </Link>
    );
}