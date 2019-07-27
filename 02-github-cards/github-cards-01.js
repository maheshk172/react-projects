const testData = [
    { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
    { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
    { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];

// class CardList extends React.Component {
//     render() {
//         const profiles = this.props.profiles;
//         console.log(profiles);
//         return (
//           <div>
//             {profiles.map(profile => <Card {...profile} />)}
//           </div>
//         );
//     }
// }

const CardList = (props) => (
	<div>
  	{props.profiles.map(profile => <Card {...profile} />)}
	</div>
);



class Form extends React.Component {
    userInputRef = React.createRef();
    handleSumbitasa = (event) => {
      event.preventDefault();
      console.log(this.userInputRef.current.value)
    };

    handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.userInputRef.current.value);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                  placeholer="Enter name to search and press submit" 
                  required 
                  ref={this.userInputRef}/>
                <button type="submit">Search User</button>
            </form>
        );
    }
}

class Card extends React.Component {

    render() {
        //let profile = testData[0];
        let profile = this.props;
        return (
            <div className="github-profile">
                <img src={profile.avatar_url}></img>
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        profiles: testData
      }
    }

    render() {
        // this.props -> will be injected from react
        return (
            <div>
                <Form />
                <div className="header">{this.props.title}</div>
                <CardList profiles={this.state.profiles} />
            </div>
        )
    }
}

ReactDOM.render(
    <App title="The Github Cards Component !!"></App>,
    mountNode
);