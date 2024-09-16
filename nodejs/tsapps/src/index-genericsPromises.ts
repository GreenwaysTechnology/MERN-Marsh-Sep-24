

function getPromise(): Promise<string> {
    return Promise.resolve('hello')
}

function getList(): Promise<Array<string>> {
    return Promise.resolve(['a', 'b'])
}

function getList2(): Promise<string[]> {
    return Promise.resolve(['a', 'b'])
}

const getMyList = (): Promise<Array<string>> => {
    return Promise.resolve(['a', 'b'])
}