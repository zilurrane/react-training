import { Component } from "react";
import { createUser } from "../api/users";

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '' }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(this.state)
            const createUserResponse = await createUser(this.state);
            this.setState({ name: '' });
            console.log(createUserResponse);
        } catch (error) {
            console.log(error);
        }
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    }

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange} />
                <button type="submit">Add</button>
            </form>
        </div>
    }
}
export default AddUser;