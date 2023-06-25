import React from "react";
import "./blog.css";
import imgStudyForTest from "../picthers/imgStudyForTest.jpg"

export default function Blog() {
  return (
    <>
      <div className="blog-title">
        <h1>הבלוגים שלנו..</h1>
        <h3>מאמרים בנושא מורים פרטיים ושיעורים פרטיים</h3>
        <p>
          בבלוג שלנו נפרסם מאמרים וכתבות הקשורים למורים פרטיים, שיעורים פרטיים
          לתלמידי בית הספר, שיעורים פרטיים בנושאי העשרה ועוד.
          <br />
          יש לכם רעיון לנושא? כתבו לנו באמצעות טופס המשוב בחלקו הימני התחתון של
          המסך.
          <br />
          שיהיה לכולנו לימוד נעים!
        </p>
      </div>

      <div className="blog-wrapper">
        <div className="cards">
          <div className="card">
            <img
              className="img-card"
              alt="imgStudyForTest"
              src={imgStudyForTest}
            />
            <div className="txt-card">
              <a href="/HowToLearnEnglish">
                <h4>איך ללמוד למבחן באנגלית</h4>
                <p>
                  בואו נשים את זה על השולחן! מבחן בכל גיל הוא עניין מלחיץ.
                  <br />
                  מבחן בשפה האנגלית עשוי להלחיץ, בגלל העובדה שמדובר במבחן בשפה
                  זרה, שהילד אינו דובר אותה וצריך ללמוד אותה על בוריה.
                </p>
              </a>
            </div>
          </div>


          <div className="card">
            <img
              className="img-card"
              alt="imgStudyForTest"
              src={imgStudyForTest}
            />
            <div className="txt-card">
              <a href="/HowToLearnEnglish">
                <h4>איך ללמוד למבחן באנגלית</h4>
                <p>
                  בואו נשים את זה על השולחן! מבחן בכל גיל הוא עניין מלחיץ.
                  <br />
                  מבחן בשפה האנגלית עשוי להלחיץ, בגלל העובדה שמדובר במבחן בשפה
                  זרה, שהילד אינו דובר אותה וצריך ללמוד אותה על בוריה.
                </p>
              </a>
            </div>
          </div>


          <div className="card">
            <img
              className="img-card"
              alt="imgStudyForTest"
              src={imgStudyForTest}
            />
            <div className="txt-card">
              <a href="/HowToLearnEnglish">
                <h4>איך ללמוד למבחן באנגלית</h4>
                <p>
                  בואו נשים את זה על השולחן! מבחן בכל גיל הוא עניין מלחיץ.
                  <br />
                  מבחן בשפה האנגלית עשוי להלחיץ, בגלל העובדה שמדובר במבחן בשפה
                  זרה, שהילד אינו דובר אותה וצריך ללמוד אותה על בוריה.
                </p>
              </a>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}
