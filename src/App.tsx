import './App.css'
import Toolbar from "./components/Toolbar/Toolbar.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home.tsx";
import Contacts from "./components/Contacts/Contacts.tsx";
import AboutUs from "./components/AboutUs/AboutUs.tsx";

const App = () => {

  return (
    <>
        <header>
            <Toolbar/>
        </header>
        <div className="container">
            <main className="container-fluid">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/about-us" element={<AboutUs/>}/>
                    <Route path="*" element={<h1>Not found!</h1>}/>
                </Routes>
            </main>
        </div>
    </>
  )
};

export default App
