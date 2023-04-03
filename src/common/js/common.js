export const getDataUrlFromFile = async function (file) {
    return await new Promise (resolve => {
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.addEventListener('load', () => {
            resolve(reader.result);
        });
    })
}

export const convertDateToString = function (date) {
    if (!date) {
        return null;
    }
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export const convertStringToDate = function (string) {
    if (!string) {
        return null;
    }
    return new Date(string);
}

export const convertMonthToString = function (date) {
    if (!date) {
        return null;
    }
    return `${date.getFullYear()}-${date.getMonth() + 1}`;
}

export const convertStringToMonth = function (string) {
    if (!string) {
        return null;
    }
    return new Date(`${string}-01`);
}