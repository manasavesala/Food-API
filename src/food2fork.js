export class Food {
    constructor (){
        this.images=[]
    }
    getFoodInfo() {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://www.food2fork.com/api/search?key=b2992b329a0d6e98651c8f742aea8f7c&page=1&sort=r`;
            request.onload = function() {
                if(this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            }
            request.open("GET", url, true);
            request.send();
        });
    }
    getData (result){
        let count = result["count"];
    let recipes= result["recipes"];
    for (let i=0;i<count;i++){
        this.images.push(recipes[i]["image_url"]);

    }
    console.log(this.images)
    }
    
}