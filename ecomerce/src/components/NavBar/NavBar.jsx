import CardWidget from "../CardWidget/CardWidget";

export default function NavBar() {
    return(
        <nav>
            <ul>
                <li>Home</li>
                <li>Phones</li>
                <li>Tablets</li>
                <li>Laptops</li>
            </ul>
            <CardWidget />
        </nav>
    )
}