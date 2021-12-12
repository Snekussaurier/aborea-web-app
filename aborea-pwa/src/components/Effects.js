import Effect from "./Effect"

export const Effects = ( {list, onDelete} ) => {
    return (
        <>
            {list.map((listItem) => <Effect key={listItem.id} effect={listItem} onDelete={onDelete}/>)}
        </>
    )
}

export default Effects
