import "./Styles/Link.css"

const Link = (props) => {
    return ( 
        <div className="link">
            <a className="linkButton" href={props.site} id={props.siteId} title={props.siteTitle}>
                <button>{props.siteDisplay}</button> 
            </a>
        </div>
     );
}
 
export default Link;