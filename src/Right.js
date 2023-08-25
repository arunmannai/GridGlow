import React from "react";

function Right(props) {
  return (
    <div className="col-sm-6 p-3">
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td className={props.selectedbox === 1 && "table-success"}>1</td>
            <td className={props.selectedbox === 2 && "table-success"}>2</td>
            <td className={props.selectedbox === 3 && "table-success"}>3</td>
          </tr>
          <tr>
            <td className={props.selectedbox === 4 && "table-success"}>4</td>
            <td className={props.selectedbox === 5 && "table-success"}>5</td>
            <td className={props.selectedbox === 6 && "table-success"}>6</td>
          </tr>
          <tr>
            <td className={props.selectedbox === 7 && "table-success"}>7</td>
            <td className={props.selectedbox === 8 && "table-success"}>8</td>
            <td className={props.selectedbox === 9 && "table-success"}>9</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Right;
