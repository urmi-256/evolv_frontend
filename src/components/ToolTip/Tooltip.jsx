import React from "react";
import Macro from "./Macro.jsx";

const Tooltip = ({macros}) =>{
    return (macros.map(macro =>{
        return <Macro key={Math.random().toString()}value={macro} />
    }))
}

export default Tooltip;