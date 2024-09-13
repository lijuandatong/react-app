function Message() {
    const name = 'Lijuan'
    // JSX : JavaScript xml (under the hood, it will be converted JavaScript)
    if(name)
        return <h1>Hello {name}!</h1>
    return <h1>Hello world!</h1>
}

// in order to be used by external
export default Message