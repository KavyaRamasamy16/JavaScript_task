var items = [ "The Pyramids", "The Grand Canyon", "Bondi Beach" ];

var showItems = function () {
    console.log("Dream destinations (" + items.length + " places to visit):");
    items.forEach(function (item) {
        console.log(" – " + item);
    });
};

// Initial display of items
showItems();
//in console by typing showItems() we can run the program
// Also using pop we can remove the items in the console prompt