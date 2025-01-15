import React, { PropsWithChildren, useContext, useState } from "react";
import { TagNotes, TagNotesContextType } from "src/Types";

const TagNotesContext = React.createContext<TagNotesContextType>({
  notes: [],
  addNotes: (noteTitle: string, tagId: number): void => {},
  deleteNotes: (noteId: number): void => {},
  getNotesByTagId: (tagId: number): TagNotes[] => [],
});

const TagNotesProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [notes, setNotes] = useState<TagNotes[]>([]);

  const addNotes = (noteTitle: string, tagId: number): void => {
    setNotes((prev) => [
      ...prev,
      {
        tagId,
        note: noteTitle,
        id: !!prev.length ? prev[prev.length - 1].id + 1 : 1,
      },
    ]);
  };

  const deleteNotes = (noteId: number): void => {
    setNotes((prev) => prev.filter((note) => note.id !== noteId));
  };

  const getNotesByTagId = (tagId: number): TagNotes[] => {
    return notes.filter((note) => note.tagId === tagId);
  };

  return (
    <TagNotesContext.Provider
      value={{ notes, addNotes, deleteNotes, getNotesByTagId }}
    >
      {children}
    </TagNotesContext.Provider>
  );
};

export const useTagNotes = () => {
  const context = useContext(TagNotesContext);

  if (!context)
    throw new Error("useTagNotes must be used within a TagNotesProvider");

  return context;
};

export default TagNotesProvider;
