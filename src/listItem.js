import { useId } from "react"


export default function ListItem({item}) {
    const list = []
    const id = useId();

    for (let index = 0; index < 10000; index++) {
        list.push(`Item: ${item}`)
    }
    return <ol>
        {list.map((ite)=><li id={id}>{ite}</li>)}
    </ol>
}