import profole1 from "../../images/depositphotos_428807632 2.png";
import profole2 from "../../images/Mask Group.png";
import profole3 from "../../images/Rectangle 142.png";
import profole4 from "../../images/Rectangle 143.png";
import objectProfile from "../../images/OBJECTS.png";
import underline1 from "../../images/Rectangle 23.png";
import underline2 from "../../images/Rectangle 24.png";
import underline3 from "../../images/Rectangle 25.png";
import doctorAvatar from "../../images/doctor.png";
import calendar from "../../images/calendar.png";
import clocks from "../../images/clock-1.png";
import videCamera from "../../images/video-camera.png";

const Notes = () => {

    return (
        <div className="notes">

            <div className="aboutConsultations">
                <div className="about">
                    <div className="aboutHeader">
                        <span><b>Онлайн консультации от</b></span>
                        <span><b>врачей специалистов 24/7</b></span>
                    </div>
                    {/* <div className="orangeStyle"><img src={underline1} width="224px" height="19px" /></div> */}
                    <div><span className="aboutText">Проконсультируйтесь <span><b>сейчас</b></span> или по <b>предварительной записи</b><br />
                        со своего компьютера или c помощью нашего приложения,<br />
                        доступного в <span className="aquaStyle"><b>App Store</b></span> и <span className="aquaStyle"><b>Google Play</b></span></span></div>
                    {/* <div className="orangeStyle1"><img src={underline2} width="66px" height="9px" /></div>
                    <div className="orangeStyle2"><img src={underline3} width="243px" height="9px" /></div> */}
                    <div className="notesButtons">
                        <div><input type="button" value="Записаться" id="noteButton"></input></div>
                        <div><input type="button" value="Как это работает?" id="howItWork"></input></div>
                    </div>
                </div>

                <div className="nodesProfile">
                    <img src={profole4} width="639.92px" height="378px" className="profile4" />
                    <img src={profole3} width="697.48px" height="378px" className="profile3" />
                    <img src={profole1} width="698px" height="506px" className="profile1" />
                    <img src={profole2} width="697.48px" height="521.78px" className="profile2" />
                </div>
            </div>

            <div className="toNotes">
                <img src={objectProfile} width="185.12px" height="315.73px" className="profile5" />
                <div className="ToNotesText">
                    <div><h1 className="toNotesHead">Записаться к врачу</h1></div>
                    <div><span className="toNodestextPart">Более 1500 врачей и более 50 разных специализаций</span></div>
                    <div className="line"><div className="orangeBoll"></div><span className="toNodestextPart">Прием в удобное для вас время, без визита в клинику</span></div>
                    <div className="line"><div className="orangeBoll"></div><span className="toNodestextPart">Врачи с опытом работы более 8 лет</span></div>
                    <div className="line"><div className="orangeBoll"></div><span className="toNodestextPart">Понятно объясним причину недуга и дадим подробную рекомендацию</span></div>
                    <div><input type="button" value="Записаться" id="tonoteButton"></input></div>
                </div>
            </div>
            <div><input type="button" value="мои записи" id="myNotes"></input></div>

            <div className="buttonslist">
                <input type="button" value="Предстоящие" id="myNotes1"></input>
                <input type="button" value="Прошедшие" id="myNotes2"></input>
                <input type="button" value="Отмененные" id="myNotes3"></input>
            </div>

            <div className="nodesList">

                <div className="nodeList1">
                    <div className="notesDataToRezerv">
                        <div className="notesData">
                            <div><img src={calendar} width="16px" height="16px" className="calendar" /> 03 Марта 2021 </div>
                            <div><img src={clocks} width="16px" height="16px" className="clock" /> 16:00 </div>
                            <div><img src={videCamera} width="16px" height="16px" className="videCamera" /> Видео связь </div>
                        </div>
                        <div><input type="button" value="Запланировано" id="myNotesrezerv"></input></div>
                    </div>

                    <div className="doctorlist">
                        <div className="aboutDoctor">
                            <div><img src={doctorAvatar} width="144.71px" height="144.71px" className="doctorAvatar" /></div>
                            <div className="docabout">
                                <div><h1>Ольга Никитина</h1></div>
                                <div><p>Оториноларинголог (ЛОР), Терапевт</p></div>
                                <div><h3>Стаж 15 лет</h3></div>
                            </div>
                        </div>
                        <div className="toSeeButtons">
                            <input type="button" value="Посмотреть запись" id="toSeeNotes"></input>
                            <input type="button" value="Посмотреть постановление" id="toSeeResolution"></input>
                        </div>
                    </div>
                </div>

                <div className="nodeList2">
                    <div className="notesDataToRezerv">
                        <div className="notesData">
                            <div><img src={calendar} width="16px" height="16px" className="calendar" /> 03 Марта 2021 </div>
                            <div><img src={clocks} width="16px" height="16px" className="clock" /> 16:00 </div>
                            <div><img src={videCamera} width="16px" height="16px" className="videCamera" /> Видео связь </div>
                        </div>
                        <div><input type="button" value="Запланировано" id="myNotesrezerv"></input></div>
                    </div>

                    <div className="doctorlist">
                        <div className="aboutDoctor">
                            <div><img src={doctorAvatar} width="144.71px" height="144.71px" className="doctorAvatar" /></div>
                            <div className="docabout">
                                <div><h1>Ольга Никитина</h1></div>
                                <div><p>Оториноларинголог (ЛОР), Терапевт</p></div>
                                <div><h3>Стаж 15 лет</h3></div>
                            </div>
                        </div>
                        <div className="toSeeButtons">
                            <input type="button" value="Посмотреть запись" id="toSeeNotes"></input>
                            <input type="button" value="Посмотреть постановление" id="toSeeResolution"></input>
                        </div>
                    </div>
                </div>

                <div className="nodeList3">
                    <div className="notesDataToRezerv">
                        <div className="notesData">
                            <div><img src={calendar} width="16px" height="16px" className="calendar" /> 03 Марта 2021 </div>
                            <div><img src={clocks} width="16px" height="16px" className="clock" /> 16:00 </div>
                            <div><img src={videCamera} width="16px" height="16px" className="videCamera" /> Видео связь </div>
                        </div>
                        <div><input type="button" value="Запланировано" id="myNotesrezerv"></input></div>
                    </div>

                    <div className="doctorlist">
                        <div className="aboutDoctor">
                            <div><img src={doctorAvatar} width="144.71px" height="144.71px" className="doctorAvatar" /></div>
                            <div className="docabout">
                                <div><h1>Ольга Никитина</h1></div>
                                <div><p>Оториноларинголог (ЛОР), Терапевт</p></div>
                                <div><h3>Стаж 15 лет</h3></div>
                            </div>
                        </div>
                        <div className="toSeeButtons">
                            <input type="button" value="Посмотреть запись" id="toSeeNotes"></input>
                            <input type="button" value="Посмотреть постановление" id="toSeeResolution"></input>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default Notes;