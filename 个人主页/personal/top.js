import React from 'react'
import './sass/top.scss'
class Top extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <div className='Top'>
                <div className='TopCenter'>
                    <div className='CenterImg'></div>
                </div>
            </div>
            </>
         );
    }
}
 
export default Top;