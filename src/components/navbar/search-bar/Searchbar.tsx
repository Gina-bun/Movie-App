import { Search } from "lucide-react"

export function Searchbar() {

    return (
        <>
        <div id="search-container" className="flex border rounded-md max-sm:w-70 p-1 max-sm:self-center">
            <Search size={20} className="m-auto"/>
            <input type="text" className="outline-none flex-1"/>
        </div>
        </>
    )
}
