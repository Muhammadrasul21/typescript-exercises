{
    // 1 masala.
    var firstLetter = function (name) {
        var str = "";
        name.split(" ").forEach(function (item) {
            str += item[0].toUpperCase();
        });
        return str;
    };
    console.log(firstLetter("John Doe"));
}
{
    // 2 masala.
    var answer = function (input) {
        var ans = input.toLocaleLowerCase();
        return ans === "yes" ? true : ans === "no" ? false : null;
    };
    console.log(answer("yes"));
}
{
    // 3 masala.
    var foo = function (name, age, isStudent) {
        return isStudent === true
            ? "John is ".concat(age, " years old and is a student")
            : "John is ".concat(age, " years old and is not a student");
    };
    console.log(foo("John", 15, true));
}
{
    // 4 masala.
    function num(input) {
        return typeof input === "number" ? input * input : "Hello ".concat(input);
    }
    console.log(num(4));
}
{
    // 5 masala.
    var User = [1, "Emily", true];
    console.log(User);
}
{
    var myCar = {
        brand: "BMW",
        year: 2022,
        isElectrick: false,
    };
    console.log(myCar);
}
{
    // 7 masala.
    function getLength(input) {
        return input.length;
    }
    console.log(getLength("Hello"));
}
{
    // 8 masala.
    function number(n) {
        var arr = [];
        if (n > 0) {
            for (var i = 1; i <= n; i++) {
                arr.push(i);
            }
        }
        return arr;
    }
    console.log(number(10));
}
{
    // 9 masala.
    function numbers(k, n) {
        var arr = [];
        if (n > k) {
            for (var i = k; i <= n; i += 2) {
                arr.push(i);
            }
        }
        return arr;
    }
    console.log(numbers(2, 10));
}
{
    // 10 masala.
    function err() {
        throw new Error("error");
    }
}
