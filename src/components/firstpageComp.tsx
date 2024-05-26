type TOheader = {
    headerText: string
    buttonText ?: string
    onchange ?: any
}

export const FirstpageComp = ({headerText, buttonText, onchange}:TOheader) => {
    return (
        <div>
            <h1>{headerText}</h1>
            <button onClick={onchange}>{buttonText}</button>
        </div>
    );
};
