import "./App.css";
import Compiler from "./coponents/Compiler";
import Navbar from "./coponents/Navbar";

function App() {

  return (
    <main className="bg-sky-200 p-[1rem]">
      <Navbar />
      <Compiler />
    </main>
  );
}

export default App;
