import Gear from "./Gear"

export const Effects = ( {list, onDelete} ) => {
    return (
        <>
            {list.map((list) => <Gear key={list.id} gear={list} onDelete={onDelete}/>)}
        </>
    )
}

export default Effects
