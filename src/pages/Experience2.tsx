import ExperienceLayout from '../components/ExperienceLayout';

const Experience2 = () => {
  const data = {
    companyName: "StartUp Inc",
    role: "Full Stack Developer",
    location: "Remote",
    description: "Worked as a founding engineer building the MVP from scratch. Handled both frontend and backend development.",
    projects: [
      {
        name: "MVP Launch",
        details: "Built and launched the initial product in 3 months using MERN stack."
      },
      {
        name: "Real-time Chat",
        details: "Implemented WebSocket-based chat feature for user support."
      },
      {
        name: "Payment Integration",
        details: "Integrated Stripe for subscription management and billing."
      }
    ]
  };

  return <ExperienceLayout {...data} />;
};

export default Experience2;
