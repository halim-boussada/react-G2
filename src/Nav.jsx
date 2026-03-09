import Button from "./Button"

function Nav(){
    return <nav>
        <a href="">Home</a>
        <a href="">about</a>
        <a href="">contact</a>
        <Button label={"login"} design={"btn-design1"} />
    </nav>
}

export default Nav