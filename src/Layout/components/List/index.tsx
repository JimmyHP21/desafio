import './styles.scss';

export function List () {
    const list = [
        {
            "id": "1",
            "name": "Ronaldo Abreu",
            "email": "ronaldo.abreu@meusite.com.br",
            "phone": "(14) 99745-1234",
            "amount": "251.59",
            "photo_url": "https://desafio.eadplataforma.com/front/assets/ronaldo.jpg",
            "status": "1"
        },
        {
            "id": "2",
            "name": "Geovane Felix",
            "email": "geovane.felix@meusite.com.br",
            "phone": "(14) 99745-5678",
            "amount": "265.59",
            "photo_url": "https://desafio.eadplataforma.com/front/assets/geovane.jpg",
            "status": "0"
        },
        {
            "id": "3",
            "name": "Eloisa Santos",
            "email": "eloisa.santos@meusite.com.br",
            "phone": "(14) 99745-9123",
            "amount": "753.03",
            "photo_url": "https://desafio.eadplataforma.com/front/assets/eloisa.jpg",
            "status": "1"
        },
        {
            "id": "4",
            "name": "Silvia Martins",
            "email": "silvia.martins@meusite.com.br",
            "phone": "(14) 99745-5467",
            "amount": "430.13",
            "photo_url": "https://desafio.eadplataforma.com/front/assets/silvia.jpg",
            "status": "0"
        },
        {
            "id": "5",
            "name": "Felipe Garcia",
            "email": "felipe.garcia@meusite.com.br",
            "phone": "(14) 99745-8971",
            "amount": "710.39",
            "photo_url": "https://desafio.eadplataforma.com/front/assets/felipe.jpg",
            "status": "1"
        },
        {
            "id": "6",
            "name": "Juliana Ferreira",
            "email": "juliana.ferreira@meusite.com.br",
            "phone": "(14) 99745-2345",
            "amount": "660.79",
            "photo_url": "https://desafio.eadplataforma.com/front/assets/juliana.jpg",
            "status": "0"
        },
        {
            "id": "7",
            "name": "Robson Silva",
            "email": "robson.silva@meusite.com.br",
            "phone": "(14) 99745-5647",
            "amount": "188.23",
            "photo_url": "https://desafio.eadplataforma.com/front/assets/robson.jpg",
            "status": "0"
        },
    ]



    return (
        <div className="__list">   

            {list.map((item) => (
                <div className="__list_item" key={item.id}>
                <div className="__icon">
                    <img src={item.photo_url} alt="avatar user list foto"/>
                </div>
                <div className="__name">{item.name}</div>
                <div className="__email">{item.email}</div>
                <div className="__phone">{item.phone}</div>
                <div>R$ {item.amount}</div>
                {item.status === '1' 
                    ? <div className="__status_ina">Inadimplente</div>
                    : <div className="__status_adi">Adimplentes</div>
                }
                
            </div>
            ))}

            <div className="__pagination">
                <div className="__ant">
                    Anterior
                </div>
                <div className="__numbers">
                    <span> 1 </span>
                    <span className="__page"> 2 </span>
                </div>
                <div className="__prox">
                    Proximo
                </div>
            </div>
        </div>
    )
}