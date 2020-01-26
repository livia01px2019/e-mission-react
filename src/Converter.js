import React from "react";
import "./Converter.css";

class Converter extends React.Component {
  constructor(props) {
    super(props);

    // TODO: Add two states to the input and their defaults:
    // 1) The input
    // 2) The inputType
    this.state = {
      inputData: this.props.foodData,
      inputType: null
    };

    // TODO: bind onTextInput and onSwitchUnits
    this.onTextInput = this.onTextInput.bind(this);
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID);
      this.setState({ inputData: this.props.foodData });
    }
  }

  // TODO: Set the input state to the text entered in the text box.
  // Hint: Access the text with 'e.target.value'
  onTextInput(e) {
    if (e.target.value.length > 0) {
      this.setState({ inputType: e.target.value });
    } else {
      this.setState({ inputType: null });
    }
  }

  // TODO: Use the input state to call a conversion function, and return it
  // Bonus points: you can check if the input is a valid number. if not, you can return an error message using the div class 'error'.
  getOutput() {
    if (
      this.props.foodData === null ||
      this.props.foodData === undefined ||
      this.props.foodData === []
    ) {
      return "no food entered";
    }
    var datum;
    for (datum of this.props.foodData) {
      if (datum[0] === this.state.inputType) {
        var emoticon;
        {
          datum[1] > 10
            ? (emoticon = ":(")
            : datum[1] > 5
            ? (emoticon = ":)")
            : (emoticon = ";))");
        }
        return (
          "1 kilo of " +
          this.state.inputType +
          " = " +
          datum[1] +
          " kilos of CO2 " +
          emoticon
        );
      }
    }

    return "food not found. try again!";
  }

  render() {
    return (
      <div className="converter">
        <div className="converter__content">
          <div className="input">
            {/* TODO: make a text box and onChange, call onTextInput*/}
            {"Enter a food: "}
            <input
              type="text"
              onChange={e => {
                this.onTextInput(e);
              }}
            />
          </div>

          <div className="output">
            {/* TODO: call getOutput() */}
            {this.getOutput()}
          </div>
        </div>

        {/* TODO: Make a button of type button, with class button, and onClick, calls onSwitchUnits */}
      </div>
    );
  }
}

export default Converter;
