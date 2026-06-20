function MissingSkills({ skills }) {
  return (
    <div className="panel">
      <h3>Missing Skills</h3>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MissingSkills;