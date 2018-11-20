// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component
class App extends React.Component {
    render() {
        return (
            <div>
                <p>My first React app :)</p>
                <MyForm />
            </div>
        )
    }
}

const MyForm = () => {
    const buttonText = { text: 'Click me now' };

    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text"/>
            <button style={{ backgroundColor: '#1B5E20', color: '#ffffff' }}>{buttonText.text}</button>
        </div>
    )
}


// take the React component and show it on the screen
ReactDOM.render(
    <App />,
    document.getElementById('root')
);