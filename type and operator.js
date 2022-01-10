function echo(name, num) {
    console.log("Evaluating the " + name + " side");
    return num;}
    console.log(echo("left", 2) ** echo("middle", 3) ** echo("right", 2));