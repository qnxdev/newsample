export default function NewsPage() {
        parseData("?key=value&key2=value2")
        return(
            <div>
                none
            </div>
        )
    
}
/* "key=value&key2=value2"
{
    key: "value",
    key2: "value2"
} */ 

function parseData(string434) {
    let a= string434.split("&");
    let b= new URLSearchParams(string434);
    return b.get()
}