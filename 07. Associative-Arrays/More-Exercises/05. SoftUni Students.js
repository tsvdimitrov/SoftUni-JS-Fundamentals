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