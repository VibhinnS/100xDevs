import { useState } from "react";
import CustomButton from "./CustomButton";

const App: React.FC = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  const [appCount, setAppCount] = useState<number>(0);

  const appButtonChange = (): void => {
    setAppCount(appCount + 1);
  }

  return (
    <div>
      <CustomButton newCount={count} setnewCount={setCount} />
      <button onClick={appButtonChange}>App Button Change {appCount}</button>
    </div>

  )
}

export default App;
