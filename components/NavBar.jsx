const React = require("react");

function NavBar(){
    return(
        <nav class="nav-wrapper">
            <div>
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li>
                        <a href="/categories">Categories</a>
                    </li>
                    <li>
                        <a href="/">Main</a>
                    </li>
                    <li>
                        <a href="/products">Products</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


module.exports=NavBar