import React, { Component } from 'react'

 class MyLeaderBoardAd extends Component {
      componentDidMount () {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        console.log('DID IT!!');
    }

    render () {
        return (
            <ins className="adsbygoogle"
                style={{ display: "block", width:'700px' , height:'90px'}}
                data-ad-format="fluid"
                data-ad-layout-key="-fb+5w+4e-db+86"
                data-ad-client="ca-pub-9222160772400333"
                data-ad-slot="42837282224"
                data-adtest="on">
            </ins>
        );
    }
}

    
export default MyLeaderBoardAd
