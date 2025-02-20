
import { useParams } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { tr } from "../../utils/translate";
import { LangContext } from "../../contexts/LangContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

const Registration = () => {
  const { sortBy } = useParams();
  // const { lang } = useContext(LangContext);
  const { t } = useTranslation();

  return (
    <>
      <div className="buttonslist">
        <Link to="future" id="myNotes1" style={{ color: sortBy === "future" ? "blue" : "grey" }}>{t("upcoming")}</Link>
        <Link to="last" id="myNotes2" style={{ color: sortBy === "last" ? "blue" : "grey" }}>{t("past")}</Link>
        <Link to="off" id="myNotes3" style={{ color: sortBy === "off" ? "blue" : "grey" }}>{t("canceled")}</Link>
      </div>
      <div className="nodesList">
        <Outlet />
      </div>
    </>
  )
}
export default Registration;