function Navbar(){
    return (
    <nav className="navbar">  
        <div className="navcontainer">
            <img className="navlogo" src="../../images/logo sin fondo.png" alt="exploradores caninos " />
            <h2 className="navsubtitle"><span className="navfont">Exploradores</span>
            <span className="navtext">Caninos</span> 
            </h2>
        </div>
        <div className="navlinks">
            <a href="#">Inicio <img src="../images/hut.png" alt="hut" /></a>
            <a href="#">Nosotros</a>
            <a href="#">Servicios</a>
            <a href="#">Petshop</a>
            <a href="#">Experiencias</a>
            <a href="#">Contacto</a>
        </div>
    </nav>  )  
}

export default Navbar;