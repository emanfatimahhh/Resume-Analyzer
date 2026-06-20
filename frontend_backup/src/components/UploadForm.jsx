function UploadForm({
  setFile,
  jobDescription,
  setJobDescription,
  analyzeResume
}) {
  return (
    <>
      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <textarea
        placeholder="Paste Job Description..."
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      />

      <button onClick={analyzeResume}>
        Analyze Resume
      </button>
    </>
  );
}

export default UploadForm;