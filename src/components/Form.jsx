import { FaTshirt } from "react-icons/fa";
import { useState } from "react";

const initialValues = {
  size: "md",
  color: "blue",
};

export default function Form() {
  const [state, setState] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(state);
    setState(initialValues);
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <FaTshirt size="100" color={state.color} />

      <select name="size" value={state.size} onChange={handleChange}>
        <option value="sm">Small</option>
        <option value="md">Medium</option>
        <option value="lg">Large</option>
      </select>

      <select name="color" value={state.color} onChange={handleChange}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}
