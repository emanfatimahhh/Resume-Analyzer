function Suggestions({ suggestions }) {
  return (
    <div className="panel">
      <h3>AI Suggestions</h3>

      <ul>
        {suggestions.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

export default Suggestions;