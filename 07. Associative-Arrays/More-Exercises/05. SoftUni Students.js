function softUniStudents(input) {

    let courses = {};

    for (const line of input) {
        if (line.includes(": ")) {
            let [courseName, capacity] = line.split(": ").map(e => e.trim());
            capacity = Number(capacity);
            if (!courses.hasOwnProperty(courseName)) {
                courses[courseName] = { capacity, users: [] };
            } else {
                courses[courseName].capacity += capacity;
            }
        } else if (line.includes("with email")) {
            let [user, word, word1, email, word2, course] = line.split(" ").map(e => e.trim());
            let [userName, credits] = user.split("[");
            credits = credits.replace("]", "");

            if (courses.hasOwnProperty(course)) {
                if (courses[course].capacity > 0) {
                    courses[course].users.push({ userName, credits, email, courseName: course });
                    courses[course].capacity -= 1;
                }
            }
        }
    }
    
    Object.keys(courses).sort((a, b) => courses[b].users.length - courses[a].users.length).map(k => {
        courses[k].users = courses[k].users.sort((a, b) => b.credits - a.credits);
        return k;
    }).forEach(k => {
        const { courseName, capacity, users } = { courseName: k, ...courses[k] }
        console.log(`${courseName}: ${capacity} places left`);
        if (users.length > 0) {
            console.log(`${users.map(s => `--- ${s.credits}: ${s.userName}, ${s.email}`).join('\n')}`);
        }

    });
}

softUniStudents(['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics', 'user13[50] with email user13@user.com joins JSCore', 'user1[25] with email user1@user.com joins JSCore', 'user8[18] with email user8@user.com joins C#Advanced', 'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics', 'user45[105] with email user45@user.com joins JSCore', 'user007[20] with email user007@user.com joins JSCore', 'user700[29] with email user700@user.com joins JSCore', 'user900[88] with email user900@user.com joins JSCore']);