// Star pattern in ascending order

function starAscending(n) {
    let result = ""
    for(let i=1; i<=n; i++) {
        result = result + "*"
        console.log(result)
    }
}

function starDescending(n) {
    for(let i=n; i>0; i--) {
        let result = ""
        for(let j=1; j<=i; j++) {
            result = result + "*"
        }
        console.log(result)
    }
}

starAscending(10)
starDescending(10)