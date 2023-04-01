export const getDataUrlFromFile = async function (file) {
    return await new Promise (resolve => {
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.addEventListener('load', () => {
            resolve(reader.result);
        });
    })
}