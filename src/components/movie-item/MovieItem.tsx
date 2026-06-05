
export function MovieItem({movieUrl, title, releaseDate}: {movieUrl:string, title:string, releaseDate:string}){

    return (
        <>
          <div className="movie-item border rounded-sm h-55 bg-amber-200">
            <div 
            className="movie-poster min-h-2/3"
            style={{
                backgroundImage: `url(${movieUrl})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "fill-available",
            }}
            >
            </div>
            <div className="movie-info h-fit p-1 ">
                <p className="movie-title">{title}</p>
                <p className="movie-date">{releaseDate}</p>
            </div>

          </div>
        
        </>
    )
}