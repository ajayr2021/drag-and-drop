export type TagNotes = {
  tagId: number;
  id: number;
  note: string;
};

export type TagNotesContextType = {
  notes: TagNotes[];
  addNotes: (noteTitle: string, tagId: number) => void;
  deleteNotes: (noteId: number) => void;
  getNotesByTagId: (tagId: number) => TagNotes[];
  deleteAllNotesWithTagId: (tagId: number) => void;
};
