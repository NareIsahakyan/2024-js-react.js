import bell from "../../images/bell.png";

const Navigations=(props)=>{
    return(
        <div className="navigations">
        <div className="navigationsCount">{props.count}</div>
        <div className="bell">
            <img src={bell} width="29" height="30" alt="Bell"/>
        </div>
    </div>
    )
}
export default Navigations;