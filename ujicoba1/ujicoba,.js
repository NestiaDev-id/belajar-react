const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

function Header(props) {
    return (<h1>Belajar React {props.name}</h1>);
}

function Homepage() {
    const students = ['Tono', 'Budi', 'Alex'];
    const [likes, setLikes] = React.useState(0);

    function handlClick() {
        setLikes(likes + 1);
    }

    return (
        <>
            <Header name="test"></Header>
            <ul>
                {students.map((list) => (
                    <li key={list}>{list}</li>
                ))}
            </ul>
            <button onClick={handlClick}>Like ({likes})</button>
        </>
    );
}

root.render(<Homepage />);
