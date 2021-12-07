import * as C from './HeaderStyling';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <C.container>
            <Link 
            style={{display: 'inline-block'}}
            to={'/'}>
                <C.logo/>
            </Link>
        </C.container>
    );
}