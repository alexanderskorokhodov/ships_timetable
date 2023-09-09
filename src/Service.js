class Service{


    async upload(data){
      return fetch("https://f90e-95-167-228-54.ngrok.io/uploadfile", 
      {
        method:'POST', 
        headers: {"Accept": "application/json", "Content-type": "application/json"},
        body: JSON.stringify({"name":JSON.stringify(data)})
      })
    }

    // async get_weather()
}


export default Service;
