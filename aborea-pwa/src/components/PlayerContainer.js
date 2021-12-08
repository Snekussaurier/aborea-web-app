const PlayerContainer = (props) => {
    return (
        <div>
            <header className="App-header">
                <h1>
                    {props.name}
                </h1>
                <div style={{ height: "calc(38px + 1vmin)", width: "calc(38px + 1vmin)", backgroundColor: "var(--3)", borderRadius: "calc(24px + 2vmin)" }} />
            </header>
            <hr/>
        </div>
    );
}

export default PlayerContainer