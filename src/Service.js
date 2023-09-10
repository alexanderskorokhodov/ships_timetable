class Service{

  async upload(data){
    return fetch("https://2d9c-95-167-228-54.ngrok.io/uploadfile", 
    {
      method:'POST', 
      headers: {"Accept": "application/json", "Content-type": "application/json"},
      body: JSON.stringify({"name":JSON.stringify(data)})
    })
  }

  // async getWeatherByOffset(x, y){
  //   return await fetch(`hhttps://5d5e-95-167-228-54.ngrok.io/getWeather`, {
  //     method:'POST', 
  //     headers: {"Accept": "application/json", "Content-type": "application/json"},
  //     body: JSON.stringify({"x":x, "y":y})
  //    })
  // }

}





export default Service;
