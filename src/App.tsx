import Website from "src/Components/Pages/Website";
import TagProvider from "src/Context/Tags/TagContext";
import TagNotesProvider from "src/Context/TagNotes/TagNotesContext";

const App = () => {
  return (
    <TagProvider>
      <TagNotesProvider>
        <Website />
      </TagNotesProvider>
    </TagProvider>
  );
};

export default App;
