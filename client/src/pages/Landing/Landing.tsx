import * as C from './LandingStyling';
import { useHistory } from 'react-router-dom';

export default function Landing() {
    const history = useHistory();

    return (
        <C.container>
            <C.hero>
                <C.button onClick={() => {history.push('/play')}}>Get Started</C.button>
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