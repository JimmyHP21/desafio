import './styles.scss';

export function Blocks () {
    return (
        <div className="__blocks">
                <div className="__blocks_block">
                    <div className="__tblock">
                        Total de clientes
                    </div>
                    <div className="__tvalue">
                        15
                    </div>
                </div>
                <div className="__blocks_block">
                     <div className="__tblock">
                        Clientes Inadimplentes
                    </div>
                    <div className="__tvalue">
                        5
                    </div>
                </div>
                <div className="__blocks_block">
                    <div className="__tblock">
                        Clientes adimplentes
                    </div>
                    <div className="__tvalue">
                        10
                    </div>
                </div>
                <div className="__blocks_block">
                    <div className="__tblock">
                        Total arrecadado
                    </div>
                    <div className="__tvalue">
                        R$ 4.162,62
                    </div>
                </div>
              </div>
    )
}