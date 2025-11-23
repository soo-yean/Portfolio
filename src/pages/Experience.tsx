import ExperienceLayout from '../components/ExperienceLayout';

const Experience = () => {
  const experience1 = {
    companyName: "OSCI",
    role: "Atlassian Solutions Engineer",
    location: "Seoul, South Korea",
    period: "May 2024 - Aug. 2025",
    description: "Architected IT Service Management processes to streamline enterprise operations. Owned the full administration and technical support for Jira and Confluence Data Center environments.",
    projects: [
      {
        name: "Samsung SDI",
        details: "Supported a large-scale migration of Jira and Confluence Data Center systems."
      },
      {
        name: "LG U+",
        details: "Administered Jira/Confluence Data Center for 3,000+ users, ensuring stable operations."
      },
      {
        name: "AI Agent",
        details: "Designed Rovo AI agents to automate repetitive support tasks and improve information retrieval for end users."
      }
    ],
    illustrationVariant: "working" as const
  };

  const experience2 = {
    companyName: "Okestro",
    role: "Frontend Developer",
    location: "Seoul, South Korea",
    period: "Sep. 2022 - May 2024",
    description: "Built the frontend of a Cloud Monitoring Platform from zero to one. Used Vue.js, TypeScript, and Apache Echarts to translate raw data into clear insights.",
    projects: [
      {
        name: "Hana TI",
        details: "Developed user management console and monitoring dashboards , using Vue 3 and Pinia."
      },
      {
        name: "Samsung SDS",
        details: "Developed administrator console and monitoring dashboards for OpenStack infrastructure, using Vue 2 and Vuex."
      },
    ],
    illustrationVariant: "laptop" as const
  };

  return (
    <div className="space-y-12 md:space-y-24">
      <ExperienceLayout {...experience1} />
      
      {/* Divider */}
      <div className="w-full h-px bg-black max-w-4xl mx-auto"></div>
      
      <ExperienceLayout {...experience2} />
    </div>
  );
};

export default Experience;
