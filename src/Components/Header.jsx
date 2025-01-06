
function Header({ setActiveCard }){

    return(
        <div className="HContainer">
            <h1 className="Heading">Mi Viaje Como Desarrollador</h1>
            <nav className="Navegator">
                <ul className="Card-Index">
                <li>
                    <button onClick={() => setActiveCard('quienSoy')}>Quien soy</button>
                </li>
                <li>
                    <button onClick={() => setActiveCard('educacion')}>Educación</button>
                </li>
                <li>
                    <button onClick={() => setActiveCard('proyectos')}>Proyectos</button>
                </li>
                <li>
                    <button onClick={() => setActiveCard('contactos')}>Contactos</button>
                </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header