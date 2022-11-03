import "./Styles/ActualLink.css"

const ActualLink = (props) => {
    return ( 
        <div className="actualLink">
            <a className="linkButton" href={props.site} id={props.siteId} title={props.siteTitle}>{props.siteDisplay}</a>
        </div>
     );
}
 
export default ActualLink;