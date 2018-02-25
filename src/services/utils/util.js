export const guid = () => {
    s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
};

export const sortByProperty = property => {
    function compare(a, b) {
        if (a[property] < b[property])
        return -1;
        if (a[property] > b[property])
        return 1;

        return 0
    }
    return compare;
};