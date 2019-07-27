function myFunction() {
    document.getElementById('rootNode1').innerHTML = ` 
    <div> 
      This is ticking timer 1
      <input></input>
    </div>
    <pre>${new Date().toLocaleTimeString()}</pre>
    `;
  
    ReactDOM.render(
      React.createElement(
        "div",
        null,
        "This is a ticking timer",
        React.createElement('input',null),
        React.createElement('pre', null, ((new Date().toLocaleTimeString()))),
      ),
      document.getElementById('rootNode2')
    );
  };
  
  setInterval(myFunction, 1000);
  
  