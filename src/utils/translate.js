import en from "../../local/en.json";
import ru from "../../local/ru.json";


 const translate = (key,l)=>{
let lang = en;
if(l === "ru"){
    lang = ru;
}
return lang[key];
}
export default translate;