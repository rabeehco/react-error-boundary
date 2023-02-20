import React from 'react'

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo){
        console.log(error)
    }

    render(){
        if(this.state.hasError){
            return (<div>
                <h2>There is an Error</h2>
            </div>)
        }

        return this.props.children
    }
}