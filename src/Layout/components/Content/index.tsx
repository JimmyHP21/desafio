import Aside  from '../Aside';
import { Blocks } from '../Blocks';

import './styles.scss';
import { List } from '../List';

export function Content () {
    return (
        <div className="container">
            <div className="container__aside">
                <Aside />
            </div>
            <div className="container__content">
              <div className="__title">
                  <div className="__title_txt">
                    Visão geral
                  </div>
              </div>
              
              <Blocks />

              <div className="__title">
                  <div className="__title_txt">
                    Clientes cadastrados
                  </div>
              </div>

              <List />
            </div>
        </div>
    )
}