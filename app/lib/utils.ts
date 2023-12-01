
export const convertFile = (image: any) => {
    return new Promise(resolve => {
        let baseURL: any = "";

        let reader = new FileReader();
        reader.readAsDataURL(image);

        reader.onload = () => {
            baseURL = reader.result;
            // console.log(baseURL);
            resolve(baseURL);
        }
    })
}

export const base64ToFile = (base64String: string, fileName: string) => {
    let arr: any = base64String.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], fileName, { type: mime })
}
