import ExperienceLayout from '../components/ExperienceLayout';

const Experience1 = () => {
  const data = {
    companyName: "Tech Corp",
    role: "Senior Frontend Engineer",
    location: "San Francisco, CA",
    description: "Led the frontend team in rebuilding the core product dashboard. Focused on performance optimization and accessibility.",
    projects: [
      {
        name: "Dashboard Revamp",
        details: "Migrated legacy codebase to React, improving load times by 40%."
      },
      {
        name: "Design System",
        details: "Created a unified design system used across 5 different products."
      },
      {
        name: "Accessibility Audit",
        details: "Achieved WCAG 2.1 AA compliance for the main application."
      }
    ]
  };

  return <ExperienceLayout {...data} />;
};

export default Experience1;
