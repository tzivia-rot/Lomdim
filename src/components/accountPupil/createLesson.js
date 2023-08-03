import React, { useEffect, useState } from "react";
import "./accountPupil.css";
import Map from "../maps/gMaps";
import { connect } from "react-redux";
import axios from "axios";
import { setAllCategories, setAllTeacher } from "../../redux/action";
import SelectedCity from "./listCities";

function mapStateToProps(state) {
  return {
    categories: state.category.category,
    teachers: state.teacher.teacherDetails,
  };
}

function CreateLesson(props) {
  const { categories, dispatch, teachers } = props;

  //משתנים
  const [selected, setSelected] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [showList, setShowList] = useState(true);
  const [cities, setCities] = useState([]);
  const [filterTeacher, setFilterTeacher] = useState(teachers);
  //כאשר עולה הדף יכנס לסטור כל הקטגוריות הנמצאות במסד נתונים
  useEffect(() => {
    axios
    //ייבוא כל נושאי הלימוד מהמסד נתונים
      .get(`http://localhost:3030/category/getAllCategories`)
      .then((res) => {
        console.log(res.data);
        dispatch(setAllCategories(res.data.getAllCategories));
      })
      .catch((err) => {
        console.log(err);
      });
    allTeachters();
    doApi();
  }, []);

  //זימון כתובת API לרשימת ערים בישראל
  const doApi = async () => {
    let url = `https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=1272`;
    let res = await axios.get(url);
    console.log(res.data.result.records);
    setCities(res.data.result.records);
  };

  //ייבוא רשימת מורים מהמסד נתונים
  const allTeachters = async () => {
    let res = await axios.get(
      `http://localhost:3030/teacherData/getAllTeachers`
    );
    console.log(res.data);
    dispatch(setAllTeacher(res.data.getAllTeachers));
  };

  function searchTeachers() {
    return (
      setShowList(true) &&
      setFilterTeacher(
        teachers &&
          teachers.filter((teacher) => {
            return (
              teacher.city === selectedCity && teacher.category.find(selected)
            );
          })
      )
    );
  }

  return (
    <>
      {/* <h3>מיד נמצא לך את המורה הכי טוב!</h3> */}
      {/* <h4>בחר תחום לימוד מהרשימה הבאה:</h4> */}
      <div className="container">
        <div className="d-flex bd-highlight">
          <div className="p-2 bd-highlight">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="בחר נושא לימוד.."
                onChange={(e) => setSelected(e.target.value)}
                list="list-categories"
                id="input-datalist"
              ></input>
              <datalist id="list-categories">
                {categories &&
                  categories.length &&
                  categories.map((item) => (
                    <option>{item.categoryName}</option>
                  ))}
              </datalist>
            </div>
          </div>
          <div className="p-2 bd-highlight">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="בחר עיר.."
                onChange={(e) => setSelectedCity(e.target.value)}
                list="list-cities"
                id="input-datalist"
              ></input>
              <datalist id="list-cities">
                {cities &&
                  cities.length &&
                  cities.map((item) => <option>{item.שם_ישוב}</option>)}
              </datalist>
            </div>
          </div>
          <div className="p-2 bd-highlight">
            <button
              onClick={searchTeachers}
              className="btn btn-primary btn-rounded"
            >
              חפש
              <i className="fas fa-search"></i>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg> */}
            </button>
          </div>
        </div>

        {showList ? (
          <div className="card">
            {filterTeacher.map((item) => (
              <React.Fragment key={item.city}>
                <h5 className="card-header">{item.city}</h5>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">{item.aboutMe}</p>
                  <a href="#!" className="btn btn-primary">
                    למידע נוסף
                  </a>
                </div>
              </React.Fragment>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default connect(mapStateToProps)(CreateLesson);
