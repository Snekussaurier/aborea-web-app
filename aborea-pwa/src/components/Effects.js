import Effect from "./Effect"

export const Effects = ( {effects, onDelete} ) => {
    return (
        <>
            {effects.map((effect) => <Effect key={effect.id} effect={effect} onDelete={onDelete}/>)}
        </>
    )
}

export default Effects
