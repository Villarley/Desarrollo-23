import React, { Component } from 'react'
import Ingresarcamisa from './Ingresarcamisa'

class Filadelatabladecamisas extends Component{

  render() {
         const inputStyleleimg = { border_radius: '50%', cursor: 'pointer', width:'100px'}
         return(<React.Fragment>
            <div className="post">
                <h2></h2>
                <div className="img">
                    <img src={this.props.imagen} alt="" />
                </div>
                <p>Colores:</p><ul>
                <li>{this.props.color1}</li>
                <li>{this.props.color2}</li>
                <li>{this.props.color3}</li>
                </ul>
                <button className="svg" onClick={() => this.actualizarlike(this.props.id, this.props.likes)}><svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 100 100"  xmlSpace="preserve"><g><path d="M50,91.5C50,91.5,50,91.5,50,91.5c-0.8,0-1.6-0.3-2.2-0.9L8.5,51.1c-4.9-4.8-7.5-11.6-7.3-18.7c0.4-7.1,3.7-13.8,9.1-18.4c4.5-3.6,9.9-5.5,15.6-5.5c6.9,0,13.7,2.8,18.6,7.7l5.5,5.5l5.5-5.4c9.6-9.6,24.3-10.5,34.2-2c5.4,4.3,8.7,10.8,9.1,17.9c0.4,7.1-2.3,14.1-7.3,19.1L52.1,90.7C51.6,91.2,50.8,91.5,50,91.5z M48.6,87.1C48.6,87.1,48.6,87.1,48.6,87.1L48.6,87.1zM25.9,13.5c-4.6,0-8.9,1.5-12.5,4.4c-4.3,3.7-7,9-7.3,14.7C6,38.3,8.1,43.7,12,47.5l38,38.2l38-38c4-4,6.1-9.7,5.8-15.3c-0.3-5.6-2.9-10.8-7.3-14.3c-7.9-6.8-19.7-6.1-27.5,1.7l-9,8.9l-9-9C37.1,15.7,31.5,13.5,25.9,13.5z"/></g></svg>
                <span>{this.props.likes}</span>
                </button></div>


         </React.Fragment>)}
        actualizarlike(idenmongo, likes){
                 let camisa = {
                    id: idenmongo,LIKES: likes +1
                }
                console.log(camisa);
                var objetolocal = camisa;
                const Url = 'http://localhost:8880/api/actualizaLikes';
                const requestMetadata = {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(objetolocal)
                  };
                  fetch(Url, requestMetadata)
                  .then(res => res.json())
                  .then(likes => {
                  this.setState({
                    
              });

                                 
                    //  console.log(camisa)
                    //  return camisa;
                 
                // this.setState({combosactuales: recipes})
                  alert("Guardado");
                  });                  
        }
        // actualizarlie = () => {
        //     // With all properties
        //    var objetolocal = this.state.CAMISA
        //    // const Url = 'https://kongzilla.herokuapp.com/api/guardarpersona';
        //    const Url = 'http://localhost:8880/api/actualizaLikes';
        //   const requestMetadata = {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(objetolocal)
        //     };
        
        //     fetch(Url, requestMetadata)
        //         .then(res => res.json())
        //         .then(camisas => {
        //         this.setState({
        //       camisasactuales: camisas
        //     });
                               
        //           //  console.log(camisa)
        //           //  return camisa;
               
        //       // this.setState({combosactuales: recipes})
        //         alert("Guardado");
        //         });
        // }

}
export default Filadelatabladecamisas;