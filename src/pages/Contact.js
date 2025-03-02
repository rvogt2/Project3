export default function Contact(){
    let fname = "John";
    let lname = "Doe";
    let email = "gmail.com";
    let comments = "";
    return(
    <>
        <form>
            <input type="text" value={fname}></input>
            <input type="text" value={lname}></input>
            <input type="email" value={email}></input>
            <input type="text" value={comments}></input>
            <input type="submit"></input>
        </form>
    </>
    )
}