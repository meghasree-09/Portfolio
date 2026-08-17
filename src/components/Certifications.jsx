function Certifications() {
  const certifications = [
    {
      title: "NPTEL IoT",
      organization: "NPTEL",
      description: "Silver Certification"
    },
    {
      title: "AWS Certification",
      organization: "Amazon Web Services",
      description: "Cloud and AWS learning"
    },
    {
      title: "Fortinet Network Security",
      organization: "Fortinet",
      description: "Network security fundamentals"
    }
  ];

  return (
    <div className="section">
      <div className="section-title">
        <p>MY ACHIEVEMENTS</p>
        <h2>Certifications</h2>
      </div>

      <div className="certifications-grid">
        {certifications.map((certification) => (
          <div className="certification-card" key={certification.title}>
            <div className="certificate-icon">★</div>

            <h3>{certification.title}</h3>

            <h4>{certification.organization}</h4>

            <p>{certification.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;