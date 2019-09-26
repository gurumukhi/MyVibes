const load = () => {
  // ev.preventDefault();
  // const keyword = form.elements["search"].value;

  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `query {
        hello {
          world {
            text
          }
        }
      }`
    })
  };

  fetch(`http://localhost:3000`, options)
    .then(res => res.json())
    .then(a => console.log(a));

  // form.reset();
};
