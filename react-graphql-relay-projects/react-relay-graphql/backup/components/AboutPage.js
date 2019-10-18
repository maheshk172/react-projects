import React from "react";

class AboutPage extends React.Component {
  render() {
    return (
      //   <div>
      //     <h2>About Page</h2>
      //     <p>This App uses react.</p>
      //   </div>

      //   <>
      //     <h2>About Page</h2>
      //     <p>This App uses react.</p>
      //   </>

      <React.Fragment>
        <h2>About Page</h2>
        <p>This App uses react.</p>
      </React.Fragment>
    );
  }
}

export default AboutPage;
