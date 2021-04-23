const ColorGenerated = ({rgb, weight,hexColor, type}) =>{

    let rgbColor = rgb.join();
    let valColor;
    type === "shade" ? valColor = "white" : valColor = ""
    
    return(
        <div className="color-result" style={{backgroundColor: `rgb(${rgbColor})`}}>
            <p className={`color-val ${valColor}`}>{weight}%</p>
            <p className={`color-val ${valColor}`}>#{hexColor}</p>
        </div>
    );
}

export default ColorGenerated;