export function TodoList(props){

    // if(props.children){
    //     return(<div style={props.person.theme}>{props.children}</div>)
    // }
    return(
        <div style={props.person.theme}>
            {!props.children ? 
            <><h1>{props.person.name}</h1>
            <img 
            src="https://i.imgur.com/yXOvdOSs.jpg" 
            alt="Hedy Lamarr" 
            class="photo"
            />
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul></>:<div style={props.person.theme}>{props.children}</div>}
        </div>
    );
}