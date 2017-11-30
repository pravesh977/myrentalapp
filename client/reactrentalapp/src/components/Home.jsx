import React, { Component } from 'react';
import rentalbackground from '../imagefolder/rentalbackground.jpg';
import Header from './Header';
import {
  Link
} from 'react-router-dom';
class Home extends Component {

    
    render() {
        return (
            <div>
                <Header />
                <div className="rentalsbuttonsdiv">
                    <Link to="/rentals"><i className="fa fa-building-o fa-5x" aria-hidden="true"></i></Link><br/>
                    <Link to="/rentals" className="mainrentalsbutton">View Available Rentals</Link>
                </div>
                <div className="parallaxdiv1">
                   <h4>picback lfiajsdlfj alsdjfalkdsjf </h4>
                    {/* <p className="parallaxtext">
                        lfa sjdflka jsdflaj sld;fkj a;lsdfja;lsdfj lasjdfilasjdf
                        alksj fdlasjd fliajsd flajsdflaksdjflakdjf lkasdjflkajdsfladsjf 
                    </p> */}
                </div>
                
                {/* <h4 style={{color:"pink", textAlign: "center"}}>picback lfiajsdlfj alsdjfalkdsjf </h4> */}
                <div className="sectiondiv">
                    <h2> section text header</h2>
                    {/* <p>ERja idsjfia jsdfl asdfj alsdjflaksjf laksj fdlkasjdfa
                        alskdfj alksjflaksjdf lkasjdfla;ksdjf;laksjdf iaj elfja
                        alksjf asdlkjfie</p> */}
                </div>
                <div className="parallaxdiv2">
                    <h4>picback lfiajsdlfj alsdjfalkdsjf </h4>
                    {/* <p className="parallaxtext">
                        lfa sjdflka jsdflaj sld;fkj a;lsdfja;lsdfj lasjdfilasjdf
                        alksj fdlasjd fliajsd flajsdflaksdjflakdjf lkasdjflkajdsfladsjf 
                    </p> */}
                </div>
                <div className="sectiondiv">
                    <h2> section text header</h2>
                    <p>ERja idsjfia jsdfl asdfj alsdjflaksjf laksj fdlkasjdfa
                        alskdfj alksjflaksjdf lkasjdfla;ksdjf;laksjdf iaj elfja
                        alksjf asdlkjfieERja idsjfia jsdfl asdfj alsdjflaksjf laksj fdlkasjdfa
                        alskdfj alksjflaksjdf lkasjdfla;ksdjf;laksjdf iaj elfja
                        alksjf asdlkjfieERja idsjfia jsdfl asdfj alsdjflaksjf laksj fdlkasjdfa
                        alskdfj alksjflaksjdf lkasjdfla;ksdjf;laksjdf iaj elfja
                        alksjf asdlkjfieERja idsjfia jsdfl asdfj alsdjflaksjf laksj fdlkasjdfa
                        alskdfj alksjflaksjdf lkasjdfla;ksdjf;laksjdf iaj elfja
                        alksjf asdlkjfieERja idsjfia jsdfl asdfj alsdjflaksjf laksj fdlkasjdfa
                        alskdfj alksjflaksjdf lkasjdfla;ksdjf;laksjdf iaj elfja
                        alksjf asdlkjfieERja idsjfia jsdfl asdfj alsdjflaksjf laksj fdlkasjdfa
                        alskdfj alksjflaksjdf lkasjdfla;ksdjf;laksjdf iaj elfja
                        alksjf asdlkjfieERja idsjfia jsdfl asdfj alsdjflaksjf laksj fdlkasjdfa
                        alskdfj alksjflaksjdf lkasjdfla;ksdjf;laksjdf iaj elfja
                        alksjf asdlkjfieERja idsjfia jsdfl asdfj alsdjflaksjf laksj fdlkasjdfa
                        alskdfj alksjflaksjdf lkasjdfla;ksdjf;laksjdf iaj elfja
                        alksjf asdlkjfieERja idsjfia jsdfl asdfj alsdjflaksjf laksj fdlkasjdfa
                        alskdfj alksjflaksjdf lkasjdfla;ksdjf;laksjdf iaj elfja
                        alksjf asdlkjfieERja idsjfia jsdfl asdfj alsdjflaksjf laksj fdlkasjdfa
                        alskdfj alksjflaksjdf lkasjdfla;ksdjf;laksjdf iaj elfja
                        alksjf asdlkjfieERja idsjfia jsdfl asdfj alsdjflaksjf laksj fdlkasjdfa
                        alskdfj alksjflaksjdf lkasjdfla;ksdjf;laksjdf iaj elfja
                        alksjf asdlkjfieERja idsjfia jsdfl asdfj alsdjflaksjf laksj fdlkasjdfa
                        alskdfj alksjflaksjdf lkasjdfla;ksdjf;laksjdf iaj elfja
                        alksjf asdlkjfieERja idsjfia jsdfl asdfj alsdjflaksjf laksj fdlkasjdfa
                        alskdfj alksjflaksjdf lkasjdfla;ksdjf;laksjdf iaj elfja
                        alksjf asdlkjfieERja idsjfia jsdfl asdfj alsdjflaksjf laksj fdlkasjdfa
                        alskdfj alksjflaksjdf lkasjdfla;ksdjf;laksjdf iaj elfja
                        alksjf asdlkjfieERja idsjfia jsdfl asdfj alsdjflaksjf laksj fdlkasjdfa
                        alskdfj alksjflaksjdf lkasjdfla;ksdjf;laksjdf iaj elfja
                        alksjf asdlkjfieERja idsjfia jsdfl asdfj alsdjflaksjf laksj fdlkasjdfa
                        alskdfj alksjflaksjdf lkasjdfla;ksdjf;laksjdf iaj elfja
                        alksjf asdlkjfieERja idsjfia jsdfl asdfj alsdjflaksjf laksj fdlkasjdfa
                        alskdfj alksjflaksjdf lkasjdfla;ksdjf;laksjdf iaj elfja
                        alksjf asdlkjfieERja idsjfia jsdfl asdfj alsdjflaksjf laksj fdlkasjdfa
                        alskdfj alksjflaksjdf lkasjdfla;ksdjf;laksjdf iaj elfja
                        alksjf asdlkjfieERja idsjfia jsdfl asdfj alsdjflaksjf laksj fdlkasjdfa
                        alskdfj alksjflaksjdf lkasjdfla;ksdjf;laksjdf iaj elfja
                        alksjf asdlkjfieERja idsjfia jsdfl asdfj alsdjflaksjf laksj fdlkasjdfa
                        alskdfj alksjflaksjdf lkasjdfla;ksdjf;laksjdf iaj elfja
                        alksjf asdlkjfieERja idsjfia jsdfl asdfj alsdjflaksjf laksj fdlkasjdfa
                        alskdfj alksjflaksjdf lkasjdfla;ksdjf;laksjdf iaj elfja
                        alksjf asdlkjfieERja idsjfia jsdfl asdfj alsdjflaksjf laksj fdlkasjdfa
                        alskdfj alksjflaksjdf lkasjdfla;ksdjf;laksjdf iaj elfja
                        alksjf asdlkjfieERja idsjfia jsdfl asdfj alsdjflaksjf laksj fdlkasjdfa
                        alskdfj alksjflaksjdf lkasjdfla;ksdjf;laksjdf iaj elfja
                        alksjf asdlkjfieERja idsjfia jsdfl asdfj alsdjflaksjf laksj fdlkasjdfa
                        alskdfj alksjflaksjdf lkasjdfla;ksdjf;laksjdf iaj elfja
                        alksjf asdlkjfieERja idsjfia jsdfl asdfj alsdjflaksjf laksj fdlkasjdfa
                        alskdfj alksjflaksjdf lkasjdfla;ksdjf;laksjdf iaj elfja
                        alksjf asdlkjfieERja idsjfia jsdfl asdfj alsdjflaksjf laksj fdlkasjdfa
                        alskdfj alksjflaksjdf lkasjdfla;ksdjf;laksjdf iaj elfja
                        alksjf asdlkjfieERja idsjfia jsdfl asdfj alsdjflaksjf laksj fdlkasjdfa
                        alskdfj alksjflaksjdf lkasjdfla;ksdjf;laksjdf iaj elfja
                        alksjf asdlkjfie</p>
                </div>
                <div className="parallaxdiv3">
                    <h4>picback lfiajsdlfj alsdjfalkdsjf </h4>
                    {/* <p className="parallaxtext">
                        lfa sjdflka jsdflaj sld;fkj a;lsdfja;lsdfj lasjdfilasjdf
                        alksj fdlasjd fliajsd flajsdflaksdjflakdjf lkasdjflkajdsfladsjf 
                    </p> */}
                </div>
                <div className="sectiondiv">
                    <h2> section text header</h2>
                    <p>ERja idsjfia jsdfl asdfj alsdjflaksjf laksj fdlkasjdfa
                        alskdfj alksjflaksjdf lkasjdfla;ksdjf;laksjdf iaj elfja
                        alksjf asdlkjfie</p>
                </div>
                <img src={rentalbackground} alt="rentalimg" className="rentalbackground"/>
            </div>
        );
    }
}


export default Home;