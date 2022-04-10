import React, { Component } from 'react'
import {Link} from 'react-scroll';
import HV from '../doc/HV-DORALY-SANTANDER.pdf'

 class Pdf extends Component {
   componentDidMount() {
     if(typeof window.screen.orientation !== 'undefined'){
       document.getElementById('enlaceDescargarpdf').click();
       window.close();

     }
     
   }
  render() {
    return (
      <div className="absolute w-full h-full">
          <object
          
          data={HV}//{ import ("../doc/HV-DORALY-SANTANDER.pdf")}
              type="application/pdf"
              width="100%"
              height="100%"
             
          >
            <Link to={HV} id="enlaceDescargarpdf"
            download="HV-DORALY-SANTANDER.pdf"
            >Your device cannot display the pdfs click to download</Link>
              

          </object>

      </div>
    )
  }
}
export default Pdf