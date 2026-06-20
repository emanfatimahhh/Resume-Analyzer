function Suggestions({ suggestions }) {
  return (
    <>
      <h3>Suggestions</h3>

      <ul>
        {suggestions.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </ul>
    </>
  );
}

export default Suggestions;