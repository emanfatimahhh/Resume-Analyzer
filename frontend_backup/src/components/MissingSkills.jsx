function MissingSkills({ skills }) {
  return (
    <>
      <h3>Missing Skills</h3>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </>
  );
}

export default MissingSkills;