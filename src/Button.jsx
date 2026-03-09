import "./Button.css"

function Button({ label , design }){
    return <button className={"btn " + design} >{label}</button>
}

export default Button