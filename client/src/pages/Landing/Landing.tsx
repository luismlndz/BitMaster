import * as C from './LandingStyling';
import { Link } from 'react-router-dom';

export default function Landing() {
    return (
        <C.container>
            <C.hero>
                <Link style={{textDecoration: 'none', width: '20%'}} to={'/play'}>
                    <C.button>Get Started</C.button>
                </Link>
            </C.hero>
            <C.overview>
                <C.overviewGif/>
                <C.dropDownGif/>
            </C.overview>
            <C.tools/>
            <C.contact/>
        </C.container>
    );
}