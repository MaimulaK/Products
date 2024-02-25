const React = require("react");

function NavBar(){
    return(
        <nav className="navBar">
            <div>
                <ul>
                    <li>
                        <a href="/categories">Categories</a>
                    </li>
                    <li>
                        <a href="/">Main</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


module.exports=NavBar