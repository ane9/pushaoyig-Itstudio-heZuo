import React from 'react';
import './reset.css'
import Heading from './heading'
import Footer from './footer'
import Navigation from './navigation'
class Ladding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Navigation></Navigation>
                <Heading></Heading>
                <Footer></Footer>
            </div>
         );
    }
}
export default Ladding;