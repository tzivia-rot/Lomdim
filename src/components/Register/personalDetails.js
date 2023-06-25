import React, { useRef, useState } from "react";
import "../Register/register.css";

export default function PersonalDetails() {
  const subjects = ["אנגלית", "מתמטיקה", "עברית", "מדעים"];
  const areas = ["מרכז", "ירושלים", "צפון","דרום", "שפלה"];

  const years = [];
  for (let i = 1960; i < 2010; i++) {
    years.push(i);
  }
  const actives = [
    "מורה פרטי בחלק מהזמן",
    "מורה פרטי במשרה מלאה",
    "בבעלותי מרכז לימוד",
  ];

  const detailRef = useRef("");
  const cityRef = useRef("");
  const phoneRef = useRef("");
  const priceRef = useRef("");

  const [allCheckedStudy, setAllCheckedStudy] = useState("");
  const [allCheckedArea, setAllCheckedArea] = useState("");
  const [allCheckedPlace, setAllCheckedPlace] = useState("");
  const [detail, setDetail] = useState("");
  const [gender, setGender] = useState("זכר");
  const [yearBirth, setYearBirth] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [price, setPrice] = useState("");
  const [myActive, setMyActive] = useState("");

  const submit = (e) => {
    e.preventDefault();
    alert("נרשמת בהצלחה");
  };

  function handleChange1(e) {
    if (e.target.checked) {
      setAllCheckedStudy([...allCheckedStudy, e.target.value]);
    } else {
      setAllCheckedStudy(
        allCheckedStudy.filter((item) => item !== e.target.value)
      );
    }
  }

  function handleChange2(e) {
    if (e.target.checked) {
      setAllCheckedArea([...allCheckedArea, e.target.value]);
    } else {
      setAllCheckedArea(
        allCheckedArea.filter((item) => item !== e.target.value)
      );
    }
  }

  function handleChange3(e) {
    if (e.target.checked) {
      setAllCheckedPlace([...allCheckedPlace, e.target.value]);
    } else {
      setAllCheckedPlace(
        allCheckedPlace.filter((item) => item !== e.target.value)
      );
    }
  }

  return (
    <div className="detail-wapper">
      <form className="form" onSubmit={submit}>
        <div className="personal-info">
          <h3 className="title-register">פרטים אישיים</h3>
          <div class="btn-group">
            <input
              type="radio"
              class="btn-check"
              name="gender"
              id="gender"
              autocomplete="off"
              checked={gender === "זכר"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label class="btn btn-secondary" for="option1">
              זכר
            </label>
            <input
              type="radio"
              class="btn-check"
              name="gender"
              id="gender"
              autocomplete="off"
              checked={gender === "נקבה"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label class="btn btn-secondary" for="option2">
              נקבה
            </label>
          </div>
          <label for="year">בחר שנת לידה:</label>
          <select
            id="year"
            name="year"
            value={yearBirth}
            onChange={(e) => setYearBirth(e.target.value)}
          >
            {years.map((option) => (
              <option id={option}>{option}</option>
            ))}
          </select>

          <div className="input-wapper">
            <input
              placeholder="עיר מגורים"
              ref={cityRef}
              type="text"
              id="city"
              autoComplete="off"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              required
            />
          </div>

          <div className="input-wapper">
            <input
              placeholder="טלפון"
              ref={phoneRef}
              type="text"
              id="pone"
              autoComplete="off"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              required
            />
          </div>
        </div>

        <div className="studyInfo">
          <h3 className="title-register">פרטי השיעור</h3>
          <label htmlFor="detail">איזה מקצועות תרצה ללמד?</label>
          <br />
          <label htmlFor="detail">בחר:</label>
          <br />

          <div className="checkbox-wapper">
            {subjects.map((sub) => (
              <div className="checkbox">
                <label htmlFor="checkbox">
                  <input type="checkbox" id={sub} onChange={handleChange1} />
                  {sub}
                </label>
              </div>
            ))}
          </div>

          <label for="active">בחר:</label>
          <select
            placeholder="היקף הפעילות שלי"
            id="active"
            name="active"
            value={myActive}
            onChange={(e) => setMyActive(e.target.value)}
          >
            {actives.map((option) => (
              <option id={option}>{option}</option>
            ))}
          </select>
          <br />
          <br />

          <label htmlFor="detail">הגדרת אזור לימוד:</label>
          <br />
          <div className="checkbox-wapper">
          {areas.map((area) => (
            <div className="checkbox">
            <label htmlFor="checkbox">
              <input type="checkbox" id={area} onChange={handleChange2} />
              {area}
              </label>
            </div>
          ))}
          </div>
          
          <br />
          <div className="detail">
            <label className="text-detail">קצת עליי...</label>
            <div className="textarea">
              <textarea
                ref={detailRef}
                rows="5"
                id="input-detail"
                name="text"
                placeholder="תיאור כללי, מומלץ לכתוב באופן חופשי את מבנה השיעור, הניסיון שלך, גישת לימוד וכו'..."
                onChange={(e) => setDetail(e.target.value)}
                value={detail}
                required
              ></textarea>
            </div>
          </div>

          <br />
          <label htmlFor="detail">הגדרת מיקום השיעור:</label>
          <br />
          <div className="checkbox-wapper">
            <div className="checkbox">
              <input type="checkbox" id="inStudent" onChange={handleChange3} />
              <label htmlFor="checkbox">בבית התלמיד</label>
            </div>

            <div className="checkbox">
              <input type="checkbox" id="inTecher" onChange={handleChange3} />
              <label htmlFor="checkbox">בבית המורה</label>
            </div>
          </div>

          <div className="input-wapper">
            <input
              placeholder="מחיר לשיעור בשקלים"
              ref={priceRef}
              type="text"
              id="price"
              autoComplete="off"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              required
            />
          </div>
        </div>

        <button type="submit" class="btn-save1">
          שמירה
        </button>
      </form>
    </div>
  );
}
