const os = require('os')

//info sobre o usuario

const user = os.userInfo()

console.log(user)

//hora do sistema
console.log(`A hora eh ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOs)