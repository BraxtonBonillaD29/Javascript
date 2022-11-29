(function (){
    var run = coroutine(function* (){
        var x = 1 + (yield null);
        var y = 1 + (yield null);

        return x + y;
    });

    run();
    run(10);
    console.log(
        "Resultado" + run(30)
    );
});