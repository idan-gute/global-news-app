import Providers from "components/Layout/Providers/Providers";
import Select from "components/Select/Select";
import React from "react";

const App = () => {
  const [age, setAge] = React.useState("");

  const ageOptions = [
    { value: "Ten", label: "Ten" },
    { value: "Twenty", label: "Twenty" },
    { value: "Thirty", label: "Thirty" },
    { value: "aaa", label: "aaa" },
    { value: "bbbb", label: "bbbb" },
    { value: "cccc", label: "cccc" },
    { value: "ddd", label: "ddd" },
    { value: "eee", label: "eee" },
    { value: "ffff", label: "ffff" },
  ];

  return (
    <Providers>        
      <Select
        label="Sources"
        value={age}
        handleChange={setAge}
        options={ageOptions}
        /> 
    </Providers>
  );
};

export default App;
