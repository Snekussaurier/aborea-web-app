import Effect from "./Effect"

export const Effects = ( {list, onDelete} ) => {
    return (
        <>
            {list.map((list) => <Effect key={list.id} effect={list} onDelete={onDelete}/>)}
        </>
    )
}

export default Effects
