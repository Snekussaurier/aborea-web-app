import Gear from "./Gear"

export const Gears = ( {list, onDelete} ) => {
    return (
        <>
            {list.map((list) => <Gear key={list.id} gear={list} onDelete={onDelete}/>)}
        </>
    )
}

export default Gears
