const scribble= require('scribbletune');
let clip1 = scribble.clip({
    notes: ['b4','e5','g5','f#5','e5','b5','a5','f#5','e5','g5','f#5','d#5','f5','b4'],
    pattern: 'x-x__-xx-x__-x-x___-x___-x__xx-x__x-x___',
    
   
});

scribble.midi(clip1,'1.mid');


let clip2 = scribble.clip({
    notes:['b4','e5','g5','f#5','e5','b5','d4','g5','d5','db5'],
    pattern: 'x-x__-xx-x__-x-x___x-x___-x___'
});
scribble.midi(clip2,'2.mid')

let lefthand = scribble.clip({
    notes: ['e4'],
    pattern: '-x_____'.repeat(5)
});
scribble.midi(lefthand,'left.mid')