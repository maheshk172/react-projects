import React from "react";
import { getLinksFirst } from '../apis/LinkApis';
import LinkStore from '../stores/LinkStore';

// function App() {
//   getLinksFirst();
//   return (
//     <div>
//       <h3>Links</h3>
//       <ul>
//         <li>Link1</li>
//         <li>Link2</li>
//       </ul>
//     </div>
//   );
// }

// export default App;

let _getAppState = () => {
  return { links: LinkStore.getAllLinks() };
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = _getAppState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    getLinksFirst();
    LinkStore.on('change', this.onChange);
  }

  componentWillUnmount() {
    // remove listener while going out of the component
    LinkStore.removeListener('change', this.onChange);
  }

  onChange() {
    console.log('4. Links changed');
    this.setState(_getAppState());
  }

  render() {

    let listContent = this.state.links.map(link => {
      return <li key={link._id}>
        <a href={link.url}>{link.title}</a>
      </li>
    });
    console.log('content:', listContent);

    return (
      <div>
        <h3>Links</h3>
        <ul>
          {listContent}
        </ul>
      </div>
    );
  }
}
