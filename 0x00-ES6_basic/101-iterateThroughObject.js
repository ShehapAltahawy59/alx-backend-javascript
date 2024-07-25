export default function iterateThroughObject(reportWithIterator) {
    let str=""
    for (const item of reportWithIterator)
        str += item+' | '
    return str
}
