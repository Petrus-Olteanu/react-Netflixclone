/**
 * function that is used to get 
 * @param arg image name
 * @returns image path + arg
 */
function getImg(arg: string){
    return require(`../assets/images/${arg}`)
}

export{getImg}

