var hanoi = function hanoi(disc, src, aux,dst) {
    if (disc > 0 ) {
        hanoi (disc - 1, src, dst, aux);
        document.writeln('Move disc ' + disc + ' from ' + src + ' to '+ dst);
        hanoi (disc -1, src, dst, aux)
    }
};

hanoi(3, 'Src', 'Aux', 'Dst');