import React from "react";
import Plot from "react-plotly.js";
import {
  categories,
  emailsExplore,
  emailsDeepen,
  emailsShare,
  emailsExploreNumber,
  emailsDeepenNumber,
  emailsShareNumber
} from "./data";

// Bar chart, can try mapping through if route for action plans exist
const trace1 = {
  x: emailsExploreNumber,
  y: categories,
  text: emailsExplore,
  name: "Explore",
  orientation: "h",
  type: "bar",
  hoverinfo: "x+y+name"
};

const trace2 = {
  x: emailsDeepenNumber,
  y: categories,
  text: emailsDeepen,
  name: "Deepen",
  orientation: "h",
  type: "bar",
  hoverinfo: "x+y+name"
};
const trace3 = {
  x: emailsShareNumber,
  y: categories,
  text: emailsShare,
  name: "Share",
  orientation: "h",
  type: "bar",
  hoverinfo: "x+y+name"
};

const barData = [trace1, trace2, trace3];

class App extends React.Component {
  state = {
    category: "Click a category to get the relevant emails",
    explore: [],
    deepen: [],
    share: []
  };
  onClick({ click }) {
    const category = click.points[0].y;
    const explore = click.points[0].text;
    const deepen = click.points[1].text;
    const share = click.points[2].text;

    this.setState({ category });
    this.setState({ explore });
    this.setState({ deepen });
    this.setState({ share });
  }

  render() {
    return (
      <>
        <Plot
          data={barData}
          layout={{
            title: "Action Plans",
            barmode: "stack",
            bargroupgap: 0.1,
            yaxis: { showgrid: false, automargin: true },
            xaxis: { zeroline: false, showgrid: false, automargin: true },
            colorway: ["#75ddbe", "#dfe38e", "#fabc60"]
          }}
          onClick={click => this.onClick({ click })}
          useResizeHandler={true}
          style={{
            width: "80%",
            height: "100%"
          }}
        />
        <Plot
          data={[
            {
              type: "table",
              header: {
                values: [
                  ["<b>CATEGORY</b>"],
                  ["<b>Explore</b>"],
                  ["<b>Deepen</b>"],
                  ["<b>Share</b>"]
                ],
                align: ["left", "center"],
                line: { width: 1, color: "#506784" },
                fill: { color: "#75ddbe" },
                font: { family: "Arial", size: 24, color: "white" }
              },
              cells: {
                values: [
                  this.state.category,
                  this.state.explore,
                  this.state.deepen,
                  this.state.share
                ],
                align: ["left", "center"],
                line: { color: "#506784", width: 1 },
                height: 30,
                fill: { color: ["white"] },
                font: { family: "Arial", size: 18, color: ["#506784"] }
              }
            }
          ]}
          useResizeHandler={true}
          style={{ width: "80%", maxHeight: "500%" }}
        />
      </>
    );
  }
}

export default App;
