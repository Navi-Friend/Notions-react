import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../Components/userContext";

export default function ReadNote({ noteId }) {
    const userContext = useContext(UserContext);
    const history = useHistory();

    const note = userContext.user.notes.find(note => note.id === noteId);

    if (!note) {
        return <div>Заметка не найдена.</div>;
    }

    const handleDeleteNote = () => {
        const updatedNotes = userContext.user.notes.filter(note => note.id !== noteId);
        userContext.setUser({ ...userContext.user, notes: updatedNotes });
        history.push("/notes"); // Перенаправляем на страницу заметок
    };

    return (
        <div className="text-2xl flex flex-col gap-3 items-center">
            <h1 className="text-4xl">{note.title}</h1>
            <div className="flex justify-between w-full">
                <Link to={`/edit-note/${noteId}`} className="mr-4">
                    ✍️ Редактировать
                </Link>
                <button onClick={handleDeleteNote} className="text-red-500">
                    🗑 Удалить
                </button>
            </div>
            <pre className="border p-3 w-full">{note.description}</pre> {/* Используем <pre> для отображения текста */}
            <Link to="/notes" className="mt-4">
                Назад
            </Link>
        </div>
    );
}