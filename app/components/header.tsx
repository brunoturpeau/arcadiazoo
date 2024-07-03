// @ts-ignore
export function Header({title}){
    return(
        <header
            className={`bg-[url('/img/jungle.webp')] z-[-1] bg-no-repeat bg-center bg-cover relative w-full h-[200px] drop-shadow-lg md:bg-[url('/img/jungle-lg.webp')] flex justify-center items-center`}>
            <h1 className={`h1 text-center`}>{title}</h1>
        </header>
    )
}