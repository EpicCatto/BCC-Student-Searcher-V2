const fs = require('fs').promises;

function base64_encode(file) {
    return fs.readFile(file)
        .then(bitmap => Buffer.from(bitmap).toString('base64'))
        .catch(err => {
            console.log('Error reading file:', err);
            return '';
        });
}

module.exports = class {
    static async find(stdid, database) {
        let name = "";
        let id = stdid;
        let image = "";
        let imagepath = "";
        
        // check if database exists
        try {
            await fs.access(`../studentsdb/${database}/`);
        } catch (err) {
            return { error: "Database not found" };
        }

        // check if the info already exists in the cache.json
        try {
            const data = await fs.readFile(`../studentsdb/${database}/cache.json`);
            let arr = JSON.parse(data.toString());
            if (!Array.isArray(arr)) {
                arr = [];
            }
            const student = arr.find((i) => i.id === stdid);
            if (student) {
                name = student.name;
                id = student.id;
                imagepath = student.imagepath;
                image = await base64_encode(imagepath);
                console.log("cached:" + id + " " + name);
                return { name, id, image };
            }
        } catch (err) {
            return { error: "Error Occured while reading cache file please report the following error to the developer\n" + err };
        }
        // Name promise
        try {
            const data = await fs.readFile(`../studentsdb/${database}/studentdb.txt`);
            const arr = data.toString().split('\n');
            const studentData = arr.find((i) => i.includes(stdid));
            if (studentData) {
                // format "id prefix firstname lastname" each line
                const [studentId, studentName] = studentData.split(" ");
                name = studentData;
                id = studentId;
                console.log(id + " " + name);
                // const image = studentId + ".jpg";
            } else {
                name = "Not Found";
                return {error: "Student not found"}
            }
        } catch (err) {
            return { error: "Error Occured while reading name file please report the following error to the developer\n" + err };
        }

        // Image promise
        try {
            const files = await fs.readdir(`../studentsdb/${database}/`);
            for (let i of files) {
                const subDirFiles = await fs.readdir(`../studentsdb/${database}/${i}`);
                const imageFile = subDirFiles.find((j) => j === `${id}.jpg`);
                if (imageFile) {
                    imagepath = `../studentsdb/${database}/${i}/${imageFile}`;
                    // convert image to base64
                    image = await base64_encode(imagepath);
                    break;
                }
            }
            if (image == "") {
                image = "Not Found";
            }
        } catch (err) {
            return { error: "Error Occured while reading image file please report the following error to the developer\n" + err };
        }

        // save the info to the cache.json
        try {
            const data = await fs.readFile(`../studentsdb/${database}/cache.json`);
            let arr = JSON.parse(data.toString());
            if (!Array.isArray(arr)) {
                arr = [];
            }
            arr.push({ name, id, imagepath });
            await fs.writeFile(`../studentsdb/${database}/cache.json`, JSON.stringify(arr));
            console.log("saved to cache:" + id + " " + name);
        } catch (err) {
            return { error: "Error Occured while saving to cache please report the following error to the developer\n" + err };
        }


        // console.log("out " + name + " " + id + " " + image)
        return { name, id, image }
    }
}