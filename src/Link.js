const Link = (props) => {
    return ( 
        <div className="link">
            <a className="linkButton" href={props.site} id={props.siteId} title={props.siteTitle}>
                {props.siteDisplay}
            </a>
        </div>
     );
}
 
export default Link;