import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { tagContext, tagData } from "../../Types";

const TagsContext = React.createContext<tagContext>({
  tags: [],
  addTag: () => {},
  removeTag: () => {},
});

const TagProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [tags, setTags] = useState<tagData[]>(() => {
    const storedTags = localStorage.getItem("tagsList");
    return storedTags ? JSON.parse(storedTags) : [];
  });
  const addTag = (tagTitle: string): void => {
    setTags((prev) => [
      ...prev,
      {
        id: !!prev.length ? prev[prev.length - 1].id + 1 : 1,
        title: tagTitle,
      },
    ]);
  };

  const removeTag = (tagId: number): void => {
    setTags((prev) => prev.filter((tag) => tag.id !== tagId));
  };

  useEffect(() => {
    localStorage.setItem("tagsList", JSON.stringify(tags));
  }, [tags]);

  return (
    <TagsContext.Provider value={{ tags, addTag, removeTag }}>
      {children}
    </TagsContext.Provider>
  );
};

export const useTags = () => {
  const context = useContext(TagsContext);

  if (!context) {
    throw new Error("useTags must be used within a TagProvider");
  }

  return context;
};

export default TagProvider;
