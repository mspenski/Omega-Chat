import React, { Component } from 'react';
import Particles from 'react-particles-js';

class Particle extends Component {
    
      
        render(){
            return (
                <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 8,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "speed": 1,
                            "out_mode": "out"
                        },
                        "shape": {
                            "type": [
                                "images",
                                "circle"
                            ],
                            "images": [
                                {
                                    "src": "/react.cd2ab268.svg",
                                    "height": 20,
                                    "width": 23
                                },
                                {
                                    "src": "/k8s.2d579d24.svg",
                                    "height": 20,
                                    "width": 20
                                },
                                {
                                    "src": "/code.b3b4c4f4.png",
                                    "height": 20,
                                    "width": 20
                                }
                            ]
                        },
                        "color": {
                            "value": "#3d3d3"
                        },
                        "size": {
                            "value": 30,
                            "random": false,
                            "anim": {
                                "enable": true,
                                "speed": 4,
                                "size_min": 10,
                                "sync": false
                            }
                        }
                    },
                    "retina_detect": false
                }} />
        );
    };
 
}



export default Particle;

