import Website from "src/Components/Pages/Website";
import TagProvider from "src/Context/Tags/TagContext";
import TagNotesProvider from "src/Context/TagNotes/TagNotesContext";

const App = () => {
  return (
    <TagNotesProvider>
      <TagProvider>
        <Website />
      </TagProvider>
    </TagNotesProvider>
  );
};

export default App;
