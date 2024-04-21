import { CreateAsset } from "../components/createAsset/createAsset";
import { LandingPage } from "../components/landingPage/landingPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<CreateAsset />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
