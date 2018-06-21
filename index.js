/*
function lowerCaseStudentNames(studentArray) {
  let lowercaseArray = []
    for (let i =0; i < studentArray.length; i++) {
      lowercaseArray[i] = studentArray[i].toLowerCase()
    }
    return lowercaseArray
}

function nameToAttributes(nameArray) {
  let tempArray= [];
  let transformedArray = [];
  for (let i=0; i < nameArray.length; i++) {
    tempArray = nameArray[i].split(" ");
    transformedArray.push({'firstName':tempArray[0], 'lastName': tempArray[1]});
  }
  return transformedArray
}

function attributesToPhrase(arrayStudents) {
  let tempValuesArray = [];
  let tempKeysArray = [];
  let finalArray = []
  for (let i = 0; i < arrayStudents.length; i++) {
    tempKeysArray = Object.keys(arrayStudents[i])
    tempValuesArray = Object.values(arrayStudents[i])
    finalArray[i] = `${tempValuesArray[0]} is from ${tempValuesArray[1]}`
  }
  return finalArray
}




*/
function lowerCaseStudentNames (list) {
  return list.map(function (student) {
    return student.toLowerCase();
  });
}

/*
function hi (student) {
  return student.toLowerCase();
}

function lowerCaseStudentNames (list) {
  return list.map(hi);
}
*/

function nameToAttributes (list) {
  return list.map(function (student) {
    const studentFirst = student.split(' ')[0];
    const studentLast = student.split(' ')[1];

    return { firstName: studentFirst, lastName: studentLast };
  });
}

function attributesToPhrase(students) {
  return students.map(function (student) {
    return `${student.name} is from ${student.hometown}`;
  });
}
