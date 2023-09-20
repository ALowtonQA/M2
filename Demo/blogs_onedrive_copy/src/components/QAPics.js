import { useParams } from "react-router-dom";

function QAPics() {
    const { id } = useParams();

    let pic;

    if (Number(id) === 1) {
        pic = "/images/smiley1.png";
    } else if (Number(id) === 2) {
        pic = "/images/smiley2.png";
    }
    
    return(
        <>
            <h3> This is picture number: {id} </h3>
            {pic && <img src={pic} />}
        </>
    )
}

export default QAPics;