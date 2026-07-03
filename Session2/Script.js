function Task1(arr) {
    arr = arr.filter(Boolean);
    return arr;
}
function Task2() {
    let originalVIPs = ["Ahmed", "Sara", "Ali"];
    let backupVIPs = [...originalVIPs];
    backupVIPs.push("Omar");
    backupVIPs.splice(0, 1);
    return originalVIPs
}
function Task3() {
    const userData = {
        id: 404,
        username: "CodeNinja",
        theme: "Dark",
        notifications: true,
        language: "AR"
    };
    let { username, id: userId, role = "User", ...userSettings } = userData;
    return userSettings;
}
function Task4(students) {
    for (let i = 0; i < students.length; i++) {
        let total = 0;
        for (let j = 0; j < students[i]['scores'].length; j++) {
            if (students[i]['scores'][j]) {
                total += Number(students[i]['scores'][j]);
            }
        }
        console.log(students[i]['name'] + " total score is: " + total);

    }
}
function Task5() {
    const defaultProfile = {
        role: "Guest",
        permissions: ["Read"]
    };

    let omarProfile = {
        ...defaultProfile,
        permissions: [...defaultProfile.permissions]
    };
    omarProfile.role = "Admin";
    omarProfile.permissions.push("Write", "Execute");

    console.log("Default Profile Permissions:", defaultProfile.permissions);
}
function Task6() {
    const hardwareLog = ["ESP32", "Arduino", "ESP32", "Raspberry Pi", "ESP32", "Arduino", "Sensors"];
    const count = new Map();
    for (const tool of hardwareLog) {

        if (count.has(tool)) {
            count.set(tool, count.get(tool) + 1);
        } else {
            count.set(tool, 1);
        }

    }

    console.log(count);
    console.log(count.get("ESP32"));
}

function Task7(id, ...values) {
    id = Number(id);
    values = values.filter(Boolean);
    values = [...new Set(values)];
    console.log(`Updating user ${id} with ${values.length} valid changes.`);
}

console.log(Task1([100, "250", "", null, 100, "150.5", undefined, 250, 0, "Hello"]));
console.log(Task2())
console.log(Task3())
Task4([
    { name: "Youssef", scores: [90, "80", null, 100] },
    { name: "Abdalla", scores: [null, 50, "10", 40] }
])
Task5();
Task6();
Task7("105",
    "Active",
    "Pro Plan",
    null,
    "Benha Branch",
    "",
    "Pro Plan",
    undefined)

