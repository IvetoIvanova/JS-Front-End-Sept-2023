function softUniCourses(input) {
    let courses = {};

    for (let line of input) {
        if (line.includes(":")) {
            let [courseName, capacity] = line.split(":").map(e => e.trim());
            capacity = Number(capacity);

            if (!courses.hasOwnProperty(courseName)) {
                courses[courseName] = { capacity, students: [] };
            } else {
                courses[courseName].capacity += capacity;
            }
        } else if (line.includes("joins")) {
            let [userInfo, courseInfo] = line.split("joins").map(e => e.trim());
            let [username, credits, email] = userInfo.split(/[\[\]]/).map(e => e.trim());
            let [courseName] = courseInfo.split(" ").filter(e => e !== "with");

            credits = Number(credits);

            if (courses.hasOwnProperty(courseName) && courses[courseName].students.length < courses[courseName].capacity) {
                courses[courseName].students.push({ username, credits, email });
            }
        }
    }

    let sortedCourses = Object.entries(courses).sort((a, b) => b[1].students.length - a[1].students.length);

    for (let [courseName, { capacity, students }] of sortedCourses) {
        let placesLeft = capacity - students.length;
        console.log(`${courseName}: ${placesLeft} places left`);

        students.sort((a, b) => b.credits - a.credits);

        for (let { username, credits, email } of students) {
            console.log(`--- ${credits}: ${username}, ${email.split(' ').slice(2).toString()}`);
        }
    }
}
