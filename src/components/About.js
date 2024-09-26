import { Component } from "react"
import UserClass from "./UserClass"

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {}
            // console.log(this.props.name +"Parent Construction");
    }

    componentDidMount(){
        // console.log("Parent Did mount");
    }
    render(){
        // console.log("Parent rendered");
        return(
            <div>
                <h1>About Class Component</h1>
                <h2>This is Rohin React Project</h2>
                {/* <User name={"Kannama function"} destination={"Ladakh"}/> */}
                <UserClass name={"Kannama class"} location={"Gokarna"} />
            </div>
        )
    }
}
export default About;