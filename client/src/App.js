import ChatBox from "./components/ChatBox";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <div className="flex">
        <div className="hidden lg:block w-1/4">
          <Sidebar />
        </div>
        <div className="lg:w-3/4">
          <ChatBox />
        </div>
      </div>
    </div>
  );
}

export default App;
