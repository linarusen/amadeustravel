export default { 
    async get(url:any) {
        return this.fetch(url);
    },
    async post(url:any, data:any) {
        return this.fetch(url, data);
    },
    host : "http://localhost:3005/",
    fetch(url:any,data:any=null) {
        return fetch(this.host + url, {
            headers : {
                "content-type":"application/json"
            },
            body  : data ? JSON.stringify(data) : null,
            method : data ? "POST" : "GET",
        }).then(t=>t.json());
    }

} 