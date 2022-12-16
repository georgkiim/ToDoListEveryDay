import React from "react";
import s from './CheckInput.module.css';

type CheckInputType = {
    onChange: (value: boolean) => void
    checked: boolean
}
const CheckInput = (props:CheckInputType) => {
    return (<input type={"checkbox"}
                   onChange={(e) => props.onChange(e.currentTarget.checked)}
                   checked={props.checked}
                   className={s.checked}
        />
    )
}
export default CheckInput