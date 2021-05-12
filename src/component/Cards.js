import "./Cards.css";
function Cards() {
    return (
        <div className="card mb-5">
            <div className="card-body p-0">
                <img src="imgs/test_img.png" alt="" className="img-fluid" />
            </div>
            <div className="card-footer">
                <h4><strong>Name of Character</strong></h4>
            </div>
        </div>
    );
}
export default Cards;