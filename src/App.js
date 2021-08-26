import React from 'react';
import About from './router/About';
import Home from './router/Home';
import { Route , Link} from 'react-router-dom';

function App(){
    return ( 
        <div>
            <ul>
                <li>
                    <Link to='/'>홈</Link>
                </li>
                <li>
                    <Link to ='/about'>소개</Link>
                </li>
            </ul>
            <Route exact={true} path ="/" component={Home} />
            <Route path ="/about" component={About} />
        </div>
    )
}

export default App;