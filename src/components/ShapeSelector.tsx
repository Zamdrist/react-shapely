import * as React from "react";
import "../styles/ShapeSelector.css";
import Circle from "./Circle";
import Rectangle from "./Rectangle";
import RightTriangle from "./RightTriangle";

interface IState {
  selectedShape?: React.ReactNode;
}

const INITIAL_STATE: IState = {
  selectedShape: <div className="NoShape" id="NoShape" />
};

class ShapeSelector extends React.Component<IState> {
  public readonly state: IState = { ...INITIAL_STATE };
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  public render() {
    return (
      <div className="ShapeSelector">
        <form>
          <select
            id="ss"
            defaultValue=""
            className="custom-select custom-select-bg"
            onChange={this.handleOnChange}
          >
            <option value="" disabled={true} hidden={true}>
              Choose a shape
            </option>
            <option value="Rectangle">Rectangle</option>
            <option value="Circle">Circle</option>
            <option value="RightTriangle">Right Triangle</option>
          </select>
          {this.state.selectedShape}
          <input type="button" className="btn btn-dark" value="Submit" />{' '}
          <input type="reset" className="btn btn-dark" value="Clear" />
          <div className="ShapeValidation">
            <label id="ShapeValidationMessage">shape validation</label>
          </div>
        </form>
      </div>
    );
  }

  private handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case "RightTriangle": {
        this.setState({ selectedShape: <RightTriangle /> });
        break;
      }
      case "Circle": {
        this.setState({ selectedShape: <Circle /> });
        break;
      }
      case "Rectangle": {
        this.setState({ selectedShape: <Rectangle /> });
        break;
      }
      default: {
        this.setState({ selectedShape: INITIAL_STATE });
      }
    }
  };
}

export default ShapeSelector;
