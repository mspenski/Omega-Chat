import React, { Component } from 'react';
import Particles from 'react-particles-js';

class Particle extends Component {
    
      
        render(){
            return (
               <Particles 
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            				}
            			}
            		}
            	}}
              style={{
                width: '100%', 
              }}
            />
        );
    };
 
}



export default Particle;

