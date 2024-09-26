import React  from 'react'

class UserClass extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            userInfo:{
                name: "dummy",
                lacation: "default"
            }
        }
            // console.log(this.props.name +"Child Construction");
           
    }

    async componentDidMount(){
        //API call
        // console.log(this.props.name + "Child component Did mount");
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json()
        // console.log("json", json);

        this.setState({
            userInfo: json,
        })
        
    }

    componentDidUpdate(){
        console.log("Component Did Update");
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
      }
    
    render(){
        const {name, location,  } = this.state.userInfo;
        return (
            <div className="user-card">
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact: @Rohinmay30</h4>
            </div>
        )
    }
}

export default UserClass;