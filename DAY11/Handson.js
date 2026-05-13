"use strict";
//1.
async function fetchData(url) {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data;
}
async function demo() {
    const url = "https://jsonplaceholder.typicode.com/albums/1";
    const album = await fetchData(url);
    console.log(`Album ID: ${album.id}`);
    console.log(`Album Title: ${album.title}`);
}
demo();
//2.
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["User"] = "User";
    Role["Guest"] = "Guest";
})(Role || (Role = {}));
const PermissionMap = {
    Admin: true,
    User: false,
    Guest: false
};
console.log(PermissionMap);
function handleTask(status) {
    switch (status) {
        case 'Open':
            console.log('Task is open');
            break;
        case 'InPorgress':
            console.log('Task is in progress');
            break;
        case 'Closed':
            console.log('Task is closed');
            break;
        case 'Archived':
            console.log('Task is archived');
            break;
        default:
            const check = status;
            return check;
    }
}
handleTask('Archived');
const root = {
    name: "Root",
    files: ["idex.ts", "app.ts"],
    subFolders: [
        {
            name: "src",
            files: ["main.ts"],
            subFolders: [
                {
                    name: "components",
                    files: ["header.ts", "footer.ts"]
                }
            ]
        },
        {
            name: "assets",
            files: ["logo.png"]
        }
    ]
};
console.log(root);
function applyMargin(margin) {
    console.log(`Applied margin: ${margin}`);
}
let m1 = "10px";
let m2 = "2rem";
let m3 = "50vh";
let m4 = "60"; //invalid
applyMargin(m1);
applyMargin(m2);
applyMargin(m3);
applyMargin(m4);
