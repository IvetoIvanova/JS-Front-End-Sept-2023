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

softUniCourses(['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics', 'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore', 'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore', 'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore', 'user900[88] with email user900@user.com joins JSCore']);
softUniCourses(['JavaBasics: 15',
    'user1[26] with email user1@user.com joins JavaBasics',
    'user2[36] with email user11@user.com joins JavaBasics',
    'JavaBasics: 5',
    'C#Advanced: 5',
    'user1[26] with email user1@user.com joins C#Advanced',
    'user2[36] with email user11@user.com joins C#Advanced',
    'user3[6] with email user3@user.com joins C#Advanced',
    'C#Advanced: 1',
    'JSCore: 8',
    'user23[62] with email user23@user.com joins JSCore']);