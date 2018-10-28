export const formatDate = (date) => {
    var d = new Date(date);
    let day = d.getDate()
    let month = d.getMonth()
    let year = d.getFullYear()
    let hours = d.getHours()
    let min = d.getMinutes()
    return `${day}/${month + 1}/${year} at ${(hours < 10 ? "0"+hours : hours)}:${(min < 10 ? "0"+min : min)}`
}

export const idObjToKeyInArray = (array) => {
    let newArray = []
    for (let index = 0; index < array.length; index++) {
        const id = array[index].id;
        newArray[id] = array[index]
    }
    return newArray; 
}

export const toggleBtnLoader = (btnElement, classNameLoader = false) => {

    if(!classNameLoader) {
        classNameLoader = 'loader-gif'
    }

    const loaderGif = document.querySelector("." + classNameLoader)
    if(loaderGif) {
        if (btnElement.style.display === "none") {
            loaderGif.style.display = "none";
            btnElement.style.display = "inline-block";
        } else if (btnElement.style.display === "") { 
            btnElement.style.display = "none";
            loaderGif.style.display = "inline-block";
        } else if (btnElement.style.display === "inline-block") { 
            btnElement.style.display = "none";
            loaderGif.style.display = "inline-block";
        }
    }

}

export const autoAdjustHeightView = () => {
    const divElement = document.getElementsByClassName('container-scroll')
    if(divElement[0] !== undefined) {
        divElement[0].style.height = 'calc(100vh - 330px)';
    }
}

export const loadScript = (url) => {
    var index  = window.document.getElementsByTagName("script")[0]
    var script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
}

export const getCurrentLocation = (elementToShowMsgLocation) => {
    var x = document.getElementById(elementToShowMsgLocation);
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }

    function showPosition(position) {
        var latlon = position.coords.latitude + "," + position.coords.longitude;
        
        return latlon;
    }

    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                x.innerHTML = "User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE:
                x.innerHTML = "Location information is unavailable."
                break;
            case error.TIMEOUT:
                x.innerHTML = "The request to get user location timed out."
                break;
            case error.UNKNOWN_ERROR:
                x.innerHTML = "An unknown error occurred."
                break;
            default:
            x.innerHTML = "An unknown error occurred."
        }
    
    }
}

export default () => {
    return console.log('não tem funcao default Aqui em Helpers');
    
}