export function AnimalsList({habitatName}){

    return (
        <div className={`basis-1/2 lg:basis-2/3 bg-white p-5 w-full`}>
            <div className="flex flex-col gap-3">
                <div>{habitatName}</div>
                <div>1</div>
                <div>1</div>
            </div>
        </div>
    )
}