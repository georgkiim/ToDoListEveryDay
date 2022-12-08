import React, {KeyboardEvent ,ChangeEvent, useState} from "react";

type EditAbleSpanType = {
    title: string
    changeName:(title:string)=>void
}
export const EditAbleSpan = (props: EditAbleSpanType) => {
    const [able, setAble]=useState(true)
    const changeOnInput = () => setAble(false)
    const changeOnSpan = () => setAble(true)
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=> {
        props.changeName(e.currentTarget.value)
    }
    const onEnter = (e:KeyboardEvent<HTMLInputElement>) => {
        if(e.key==='Enter'){
            props.changeName(e.currentTarget.value)
            setAble(true)
        }
    }

    return able
        ?<span onDoubleClick={changeOnInput}>{props.title} </span>
        :<input defaultValue={props.title}
                onBlur={changeOnSpan} autoFocus
                onChange={onChangeHandler}
                onKeyDown={onEnter}
                />

}