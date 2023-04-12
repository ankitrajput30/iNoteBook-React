import React from "react";
// import { About } from "./components/About";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import NoteState from "./context/notes/NoteState";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Alert from "./components/Alert";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { useState } from "react";
import { NoteStore } from "./components/NoteStore";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";
// import { BlogStore } from "./components/Blogs/BlogStore";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <div className="container my-3">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/notes" element={<NoteStore showAlert={showAlert} />} />
              {/* <Route exact path="/blogs" element={<BlogStore showAlert={showAlert} />} /> */}
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/login" element={<Login showAlert={showAlert} />} />
              <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </NoteState>
    </>
  );
}

export default App;
