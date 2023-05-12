export default function AppHeader(props : any) {
    return <div className="admin--heading">
        <h1 className="admin--heading--hello">Hello, {props.username || "{User}"}</h1>
        <div className="admin--heading--user">
            <div className="admin--heading--user--photo-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/ru/9/94/%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg" alt=""/>
            </div>
        </div>
    </div>
}