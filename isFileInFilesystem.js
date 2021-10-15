const tree = {
    name : "home",
    files : ["notes.txt","todo.txt"],
    subFolders: [{
        name : "andrea",
        files : ["paper.pdf","funds.csv"],
        subFolders: []
    },
    {
        name: "john",
        files : ["summer1.jpg","summer2.jpg", "summer3.jpg"],
        subFolders: [{
            name : "logs",
            files : ["logs1","logs2","logs3","logs4"],
            subFolders: []
        }]
    }]
};

const isFileInFilesystem = (fileName) => {
    return function f(tree) {
        if (tree.files.some(file => file === fileName)) {
            return true
        }
        return tree.subFolders.some(subFolder => f(subFolder))
    }
}

console.log("paper.pdf: ", isFileInFilesystem("paper.pdf")(tree));
console.log("randomfile: ", isFileInFilesystem("randomfile")(tree));
console.log("randomfile2: ", isFileInFilesystem("randomfile2")(tree));
console.log("todo.txt: ", isFileInFilesystem("todo.txt")(tree));
console.log("logs1: ", isFileInFilesystem("logs1")(tree));
console.log("summer1.jpg: ", isFileInFilesystem("summer1.jpg")(tree));
