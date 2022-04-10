import React, { Component } from 'react'
import HV from '../doc/HV-DORALY-SANTANDER.pdf'

 class Pdf extends Component {
  render() {
    return (
      <div className="absolute w-full h-full">
          <object
          
          data={HV}//{ import ("../doc/HV-DORALY-SANTANDER.pdf")}
              type="application/pdf"
              width="100%"
              height="100%"
             
          >
              

          </object>

      </div>
    )
  }
}
export default Pdf