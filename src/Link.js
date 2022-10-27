const Link = (props) => {
    return ( 
        <div className="link">
            <a className="linkButton" href={props.site} id={props.idSite}>
                {props.displaySite}
            </a>
        </div>
     );
}
 
export default Link;