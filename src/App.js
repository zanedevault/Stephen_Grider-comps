import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "./Button";

function App() {
  const handleClick = () => {
    console.log("Clicked!");
  }

  return (
    <div>
      <div>
        <Button primary rounded onClick={handleClick}><GoBell />Hi there</Button>
      </div>
      <div>
        <Button outline secondary>hello world</Button>
      </div>
      <div>
        <Button warning><GoCloudDownload />submit</Button>
      </div>
      <div>
        <Button success rounded outline><GoDatabase ></GoDatabase>save</Button>
      </div>
      <div>
        <Button>exit</Button>
      </div>
    </div>
  );
}

export default App;
