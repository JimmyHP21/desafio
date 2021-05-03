import './styles.scss';
import { VscBellDot } from 'react-icons/vsc';
import { VscSearch } from 'react-icons/vsc';


export function Header () {
    const user = {
        "id": "2",
        "name": "Geovane Felix",
        "email": "geovane.felix@meusite.com.br",
        "phone": "(14) 99745-5678",
        "amount": "265.59",
        "photo_url": "https://desafio.eadplataforma.com/front/assets/geovane.jpg",
        "status": "0"
    }
    return (
        <nav className="container__header">
            <div className="container__header_green">
                <img src="https://eadplataforma.com/public/assets/images/logotipo-ead-plataforma-light.svg" alt="EAD Plataforma"/>
            </div>
            <div className="container__header_white">
                <div className="header__search">
                    <VscSearch />
                    <input className="header__search_input" type="text" placeholder="Busque por cliente" />
                </div>
                <div className="header__bell">
                    <VscBellDot />

                    <div className="header__user">
                        <img src={user.photo_url} alt="EAD Plataforma"/>
                    </div>
                </div>               
            </div>
        </nav>
    )
}