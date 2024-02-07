import { useState } from "react";
function Left(props) {
  const [value, setValue] = useState("");
  function handleInputChange(event) {
    setValue(+event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (value >= 1 && value <= 9) {
      props.setBox(value);
    } else {
      alert("Number should be between 1 and 9");
      props.setBox(0);
      setValue("");
    }
  }
  return (
    <div className="col-sm-6 p-3">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="form-control text-center"
          value={value}
          onChange={handleInputChange}
        />
        <div className="text-center mt-4">
          <button type="submit" className="btn btn-outline-success btn-lg">
            Color Me
          </button>
        </div>
      </form>
    </div>
  );
}
export default Left;
