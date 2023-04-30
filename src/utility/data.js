const  getJSON = async url =>{
    const response = await fetch(url);
    const jsondata = await response.json();
    return jsondata;


}

export {
    getJSON,
}