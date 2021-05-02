import { MdDashboard } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { BsFillChatFill } from "react-icons/bs";


import './styles.scss';

export function Aside () {
    return (
        <div className="aside__content">
            <div className="aside__content_list">
                <div className="__item active">
                    <div className="__item_icon">
                        <MdDashboard />
                    </div>
                    <div className="__item_text">
                        Painel
                    </div>
                </div>
                <div className="__item">
                    <div className="__item_icon">
                        <MdSettings />
                    </div>
                    <div className="__item_text">
                        Configurações
                    </div>
                </div>
                <div className="__item">
                    <div className="__item_icon">
                        <BsFillChatFill />
                    </div>
                    <div className="__item_text">
                        Suporte
                    </div>
                </div>
            </div>
        </div>
    )
}