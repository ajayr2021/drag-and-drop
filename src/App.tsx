import Website from "src/Components/Pages/Website";
import TagProvider from "src/Context/Tags/TagContext";

const App = () => {
  return (
    <TagProvider>
      <Website />
    </TagProvider>
  );
};

export default App;
