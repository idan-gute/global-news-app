import Button from "components/Button/Button";
import Providers from "components/Layout/Providers/Providers";

const App = () => {
  const onClick=()=>console.log('click')
  return (
    <Providers>
      <Button text="primary" buttontype="primary" onClick={onClick} icon />
    </Providers>
  );
};
export default App;

