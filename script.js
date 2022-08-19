let arr = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
];
let firstplayer = "x";

while (true) {
    let board = arr[0].join("   ") +
        "\n" +
        arr[1].join("   ") +
        "\n" +
        arr[2].join("   ") +
        "\n";

    let row = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + board);
    let column = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + board)

    if (arr[row][column] !== "_"){
    alert("Դուք խախտել եք խաղի կանոնները")

        break;
    }

    arr[row][column] = firstplayer;

    if (firstplayer == "x"){
        firstplayer = "օ"
    }else{
        firstplayer = "x";
    }

}