

document.querySelectorAll('input').forEach( function (e) {
    if ( e.type === 'checkbox' ) {
        e.addEventListener('change', function () {
            scoreCalc()
        })
    }
})

const scoreCalc = function () {
    let score = 0

    if ( document.getElementById('moves').checked ) { score = score + 8 }
    if ( document.getElementById('self').checked ) { score = score + 2 }
    if ( document.getElementById('conversation').checked ) { score = score + 3 }
    if ( document.getElementById('matters').checked ) { score = score + 3 }
    if ( document.getElementById('fun').checked ) { score = score + 2 }
    if ( document.getElementById('network').checked ) { score = score + 8 }
    if ( document.getElementById('pricing').checked ) { score = score + 3 }
    if ( document.getElementById('demonstrate').checked ) { score = score + 3 }
    if ( document.getElementById('comparison').checked ) { score = score + 3 }
    if ( document.getElementById('pace').checked ) { score = score + 3 }
    if ( document.getElementById('listen').checked ) { score = score + 8 }
    if ( document.getElementById('routine').checked ) { score = score + 3 }
    if ( document.getElementById('ownership').checked ) { score = score + 4 }
    if ( document.getElementById('resources').checked ) { score = score + 3 }
    if ( document.getElementById('questions').checked ) { score = score + 8 }
    if ( document.getElementById('business').checked ) { score = score + 3 }
    if ( document.getElementById('why').checked ) { score = score + 4 }
    if ( document.getElementById('expertise').checked ) { score = score + 3 }
    if ( document.getElementById('recommendations').checked ) { score = score + 2 }
    if ( document.getElementById('hesitations').checked ) { score = score + 3 }
    if ( document.getElementById('drive').checked ) { score = score + 3 }
    if ( document.getElementById('expectations').checked ) { score = score + 8 }
    if ( document.getElementById('selfserve').checked ) { score = score + 3 }
    if ( document.getElementById('connect').checked ) { score = score + 2 }
    if ( document.getElementById('referrals').checked ) { score = score + 3 }
    if ( document.getElementById('feedback').checked ) { score = score + 2 }

    document.getElementById('submit').value = `Score: ${score}`
}

scoreCalc()