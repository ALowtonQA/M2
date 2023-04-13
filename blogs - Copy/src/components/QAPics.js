import { useParams } from "react-router-dom";

function QAPics(props) {
    const { id } = useParams();
    var pic;

    if (Number(id) === 1) {
        pic = "/images/smiley1.png";
    } else if (Number(id) === 2) {
        pic = "/images/smiley2.png";
    }

    return (
        <div>
            <h3> This is picture number: {id} </h3>
            {pic && <img src={pic} />}
        </div>
    );
};

export default QAPics;
