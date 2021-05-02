import './styles.scss';
import { VscBellDot } from 'react-icons/vsc';
import { VscSearch } from 'react-icons/vsc';
import { VscAccount } from 'react-icons/vsc';


export function Header () {
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
                        <VscAccount />
                    </div>
                </div>               
            </div>
        </nav>
    )
}