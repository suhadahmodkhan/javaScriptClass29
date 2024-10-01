import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div>
<div className="flex justify-between items-center">
    <figure>
    <img src="https://i.postimg.cc/JnhQ52t2/Logo.png" alt="" />
    </figure>

    <div className="flex gap-5 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/donation">Donation</Link>
        <Link to="/statictics">Statictics</Link>
        
            </div>
</div>
<Outlet/>
     </div>
    )
}
export default Navbar ;