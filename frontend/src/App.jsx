import { useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import StatsCard from "./components/StatsCard";
import UploadForm from "./components/UploadForm";
import SkillChart from "./components/SkillChart";
import MissingSkills from "./components/MissingSkills";
import Suggestions from "./components/Suggestions";

import { exportPDF } from "./utils/pdfExport";

import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);

  const analyzeResume = async () => {
    if (!file) {
      alert("Please upload a resume");
      return;
    }

    const formData = new FormData();

    formData.append("resume", file);
    formData.append("job_description", jobDescription);

    try {
      const response = await axios.post(
        "http://localhost:5000/analyze",
        formData
      );

      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Backend is not running");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <UploadForm
          setFile={setFile}
          jobDescription={jobDescription}
          setJobDescription={setJobDescription}
          analyzeResume={analyzeResume}
        />

        {result && (
          <div id="report-section">
            <div className="stats-grid">
              <StatsCard
                title="ATS Score"
                value={result.ats_score || 0}
              />

              <StatsCard
                title="Match %"
                value={result.match_percentage || 0}
              />

              <StatsCard
                title="Skills Found"
                value={result.resume_skills?.length || 0}
              />
            </div>

            <button
              onClick={exportPDF}
              style={{ marginTop: "20px" }}
            >
              Download Report
            </button>

            <SkillChart
              required={result.job_skills?.length || 0}
              found={result.resume_skills?.length || 0}
              missing={result.missing_skills?.length || 0}
            />

            <MissingSkills
              skills={result.missing_skills || []}
            />

            <Suggestions
              suggestions={result.suggestions || []}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;