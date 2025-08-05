import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUS";
import Form from "./components/Form";
import Submissions from "./components/Submissions";
import Login from "./components/Login";
import Body from "./components/Body";

function HomePage() {
  return (
    <main className="pt-20 pb-40">
      <Hero />
      <WhyChooseUs />
      <Form />
    </main>
  );
}

function App() {
  return (
    <Provider store={appStore}>
      <Router>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<Login />} />
            <Route path="submissions" element={<Submissions />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
