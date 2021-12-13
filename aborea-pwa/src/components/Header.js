const Header = (props) => {
    return (
        <>
            <header className="App-header">
                <h1>
                    {props.name}
                </h1>
            </header>
            <hr/>
        </>
    );
}

export default Header