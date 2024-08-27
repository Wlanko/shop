import React, { Component } from 'react';

class MainView extends Component {
    render() {
        return (
            <div className="MainView" style={{ minHeight: "10vh", background: "gray", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1>TheRaven.Ink</h1>
            </div>
        )
    }
}

export default MainView