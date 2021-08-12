const Eventemitter = require('events');
const emitter = new Eventemitter();
// Regester listener
emitter.on('work-Started',()=>{
    console.log('started')
})
emitter.on('work-ended',()=>{
    console.log('ended')
})
// emit events
emitter.emit('work-Started')
setTimeout(() => {
    emitter.emit('work-ended')
}, 2000);