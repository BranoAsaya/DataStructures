function BracketCheck(arg) {
    const BIndexStart = arg.indexOf('[')
    const BIndexEnd = arg.indexOf(']')
    const CIndexStart = arg.indexOf('{')
    const CIndexEnd = arg.indexOf('}')
    const RIndexStart = arg.indexOf('(')
    const RIndexEnd = arg.indexOf(')')
    if (BIndexStart < BIndexEnd && CIndexStart < CIndexEnd && RIndexStart < RIndexEnd) {
        console.log(true);
    }
    else { console.log(false); }
    // if (BIndexStart >) {
        
    // } else {
        
    // }
}


BracketCheck("[(){}]")