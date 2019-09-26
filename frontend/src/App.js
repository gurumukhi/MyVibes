import React from "react";

const load = () => {
  const options = {
    method: "post",

    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `{
      hello {
        world {
          text
        }
      }
    }`
    })
  };

  return fetch(`http://localhost:8080/graphql`, options).then(res =>
    res.json()
  );
  // .then(a => console.log("%j", a));
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "<EMPTY>" };
  }

  componentDidMount() {
    load().then(a => {
      // console.log(a.data.hello.world.text);
      this.setState({ text: a.data.hello.world.text });
    });
  }

  render() {
    return <div>{this.state.text}</div>;
  }
}

export default App;
