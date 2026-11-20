import "./CardPosts.css";

const CardPosts = ({ imgPost, titlePost, descricaoPost, id }) => {
    return (
        <>
            <div className="containerCard">
                <div>
                    <img src={imgPost} alt="" />

                </div>
                <div className="cardInfo">
                    <h2>{titlePost}</h2>
                    <p>{descricaoPost}</p>
                    <p>ID do post: {id}</p>
                </div>


            </div>
        </>
    );
}

export default CardPosts;