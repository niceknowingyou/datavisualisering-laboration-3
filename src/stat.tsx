export default function Stat({statNumber,statText,statColor}:{statNumber: string, statText: string, statColor:string}){

    return(
        <div className="flex flex-col gap-1 text-center">
            <p
                className="font-bold text-3xl"
                style={{ color: statColor }}
            >
                {statNumber}
            </p>
            <p>{statText}</p>
        </div>
    )

}