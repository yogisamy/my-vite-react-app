  export function AlertButton(props) {

const onClick = () =>{
    props.onClickFun(props.message);
}
  return (
    <button onClick={onClick}>
      {props.children}
    </button>
  );
}