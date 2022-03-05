import './App.css';
import PageContent from "./components/PageContent";
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <div className="App">
      {/* PageContent */}
      <section id="pagecontent-section">
        <PageContent />
      </section>
      {/* FormContent */}
      <section id="form-section">
        <SignUpForm />
      </section>
    </div>
  );
}

export default App;
