import "./App.css";
import ContactList from "./ContactList/ContactList.js";
import SearchBox from "./SearchBox/SearchBox.jsx";
import ContactForm from "./ContactForm/ContactForm.jsx";

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />

      <ContactList />
    </div>
  );
}

export default App;
