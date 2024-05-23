import "./App.css";
import IllustrationMobile from "./assets/images/illustration-woman-online-mobile.svg";
import BackgroundMobile from "./assets/images/bg-pattern-mobile.svg";
import Accordion from "./Acordion/accordion";

function App() {
  const accordionItems = [
    {
      title: "How many team members can I invite?",
      content:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
    },
    {
      title: "What is the maximum file upload size?",
      content:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      title: "How do I reset my password?",
      content:
        "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    },

    {
      title: "Can I cancel my subscription?",
      content:
        "Yes! Send us a message and we’ll process your request no questions asked.",
    },
    {
      title: "Do you provide additional support?",
      content:
        "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },
  ];

  return (
    <div className="App">
      <div className="accordion-card">
        <div className="banner-mobile">
          <div className="logo">
            <img className="illustration" src={IllustrationMobile} alt="logo" />
            <img className="shadow" src={BackgroundMobile} alt="logo-image" />
          </div>
        </div>
        <div className="content">
          <h1>FAQ</h1>
          <Accordion items={accordionItems} />
        </div>
      </div>
    </div>
  );
}

export default App;
