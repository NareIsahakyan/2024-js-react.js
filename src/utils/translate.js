import en from "../../local/en.json";
import ru from "../../local/ru.json";

export const t = (key,lng)=>{
let lang = ru;
if(lng === "en"){
    lang = en;
}
return lang[key]
}