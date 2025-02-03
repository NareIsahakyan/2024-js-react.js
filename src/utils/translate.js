import en from "../../local/en.json";
import ru from "../../local/ru.json";

export const t = (key,lng)=>{
let lang = en;
if(lng === "ru"){
    lang = ru;
}
return lang[key]
}