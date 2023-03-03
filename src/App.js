import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "isjdfv",
      label: "Can i use React on any project?",
      content:
        "I'm baby activated charcoal pour-over shaman swag synth. Shoreditch tbh poke, beard polaroid fam pork belly everyday carry.",
    },
    {
      id: "soiv",
      label: "Can i use JavaScript on any project?",
      content:
        "Listicle chartreuse try-hard edison bulb solarpunk kale chips lyft tattooed health goth intelligentsia seitan. Blue bottle williamsburg retro kinfolk godard chartreuse hammock deep v kickstarter gastropub irony lumbersexual DIY.",
    },
    {
      id: "oiwed",
      label: "Can i use CSS on any project?",
      content:
        "Single-origin coffee four dollar toast everyday carry mlkshk art party scenester portland cray freegan fixie flannel forage jean shorts praxis.",
    },
  ];

  return <Accordion items={items}/>;
}

export default App;
