export type tagData = {
  id: number;
  title: string;
};

export type tagContext = {
  tags: tagData[];
  addTag: (tagTitle: string) => void;
  removeTag: (tagId: number) => void;
};
