

export default function ListItem({item}) {
    const list = []


    for (let index = 0; index < 10000; index++) {
        list.push(`Item: ${item}`)
    }
    return <ol>
        {list.map((ite)=><li>{ite}</li>)}
    </ol>
}