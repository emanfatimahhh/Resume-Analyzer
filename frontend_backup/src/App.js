import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);

  const analyzeResume = async () => {

    const formData = new FormData();

    formData.append("resume", file);
    formData.append(
      "job_description",
      jobDescription
    );

    const response = await axios.post(
      "http://localhost:5000/analyze",
      formData
    );

    setResult(response.data);
  };

  return (
    <div className="container">

      <div className="card">

        <h1>Resume Analyzer</h1>

        <input
          type="file"
          accept=".pdf"
          onChange={(e) =>
            setFile(e.target.files[0])
          }
        />

        <textarea
          placeholder="Paste Job Description..."
          value={jobDescription}
          onChange={(e) =>
            setJobDescription(e.target.value)
          }
        />

        <button onClick={analyzeResume}>
          Analyze Resume
        </button>

        {result && (
          <div className="results">

            <h2>
              Match Score:
              {result.match_percentage}%
            </h2>

            <h3>Missing Skills</h3>

            <ul>
              {result.missing_skills.map(
                (skill, index) => (
                  <li key={index}>{skill}</li>
                )
              )}
            </ul>

            <h3>Suggestions</h3>

            <ul>
              {result.suggestions.map(
                (s, index) => (
                  <li key={index}>{s}</li>
                )
              )}
            </ul>

          </div>
        )}

      </div>

    </div>
  );
}

export default App;