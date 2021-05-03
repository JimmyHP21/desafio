import { MdDashboard } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { BsFillChatFill } from "react-icons/bs";


import './styles.scss';
import { connect } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";

function Aside ( props: any ) {
    const [list] = useState(0);

    useEffect(() => {
        async function FetchApi() {
            const response = axios.get( props.url + '/users',  { headers: { "Access-Control-Allow-Origin": "*",
                                                                                "Authorization" : "123456789",
                                                                                "Access-Control-Allow-Headers": "Authorization", 
                                                                                'Content-Type': 'application/json',
                                                                                "Acess-Control-Allow-Credentials": true,
                                                                                "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" }});
            useState((await response).data)

        }

        FetchApi()
    }, [])

    function a () {
        console.log(list)
    }

    return (
        <div className="aside__content">
            <div className="aside__content_list">
                <div className="__item active" onClick={a}>
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
                
                <div className="__last">
                    <div className="__last_icon">
                        <BsFillChatFill />
                    </div>
                    <div className="__last_text">
                        Suporte
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps( state: any ) {
    return {
         url: state.prop3.url,
    }
}

export default connect (mapStateToProps) (Aside)