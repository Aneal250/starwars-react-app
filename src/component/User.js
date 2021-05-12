import { render } from "@testing-library/react";
import React from "react";
import "./Cards.css";
class User extends React.Component {
    constructor(props){
        super(props);
        this.overlay = '';
        this.setRef = (elem) => {
            this.overlay = elem
        }
    }

    showDetails () {
        let overlay = this.overlay;
        overlay.style.display = 'flex';
        setTimeout(() => {
            overlay.style.opacity = 1;
        }, 300);
    }

    hideDetails() {
        let overlay = this.overlay;
        overlay.style.opacity = 0;
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 500);
    }
    
    render(){
        let character = this.props.character;
        return (
            <div className="card mb-5">
                <div className="overlay" ref={this.setRef}>
                    <div>
                        <p><label><strong>Gender: </strong></label> {character.gender}</p>
                        <p><label><strong>Height: </strong></label> {character.height}</p>
                        <p>
                            <button className="btn btn-primary" onClick={()=> this.hideDetails()}>
                                Hide Details
                            </button>
                        </p>
                    </div>
                </div>
                <div className="card" onClick={ () => this.showDetails() }>
                    <div className="card-body p-0" role="button">
                        <img src="imgs/test_img.png" alt="" className="img-fluid w-100" />
                        <div className="card-footer">
                            <h4><strong>{character.name}</strong></h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default User;


