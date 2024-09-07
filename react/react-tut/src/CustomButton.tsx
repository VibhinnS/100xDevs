import React from "react";

interface componentProps {
    newCount: number;
    setnewCount: React.Dispatch<React.SetStateAction<number>>;
  }
  

const CustomButton: React.FC<componentProps> = (props: componentProps): JSX.Element => {
    const propsButton = ():void => {
        props.setnewCount(props.newCount + 1);
    }

    return (
        <div>
            <button onClick={propsButton}>Props Counter {props.newCount} </button>
        </div>
    )
}

export default CustomButton;
