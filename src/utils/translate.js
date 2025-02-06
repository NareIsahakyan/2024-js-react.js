import en from "../local/en.json";
import ru from "../local/ru.json";

export const translate = (key,lang)=>{
let lang = en;
if(lang === "ru"){
    lang = ru;
}
return lang[key];
}