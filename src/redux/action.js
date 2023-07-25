
//USER
export function addUser(newUser) {
  return { type: "SET_USER", payLoad: newUser };
}

// export function updateUser(update) {
//   return { type: "UPDATE_USER", payLoad: update };
// }

// export function deleteUser(del) {
//   return { type: "DELETE_USER", payLoad: del };
// }


//teacherData
export function addTeacherDetails(newTecher) {
  return { type: "ADD_TEACHER_DETAILS", payLoad: newTecher };
}

export function updateTeacherDetails(update) {
  return { type: "UPDATE_TEACHER_DETAILS", payLoad: update };
}

export function setAllTeacher(set) {
  return { type: "SET_ALL_TEACHERS", payLoad: set };
}

//categories
export function setAllCategories(add) {
  return { type: "SET_ALL_CATEGORY", payLoad: add };
}

export function showCategory(show) {
  return { type: "SHOW_COTEGOTY", payLoad: show };
}

export function deleteCategory(delet) {
  return { type: "DELETE_CATEGOTY", payLoad: delet };
}


//lesson
export function setAllLessons(set) {
  return { type: "SET_ALL_LESSONS", payLoad: set };
}