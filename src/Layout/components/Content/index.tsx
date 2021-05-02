import { Aside } from '../Aside';
import './styles.scss';

export function Content () {
    return (
        <div className="container">
            <div className="container__aside">
                <Aside />
            </div>
            <div className="container__content">
              Opa
            </div>
        </div>
    )
}