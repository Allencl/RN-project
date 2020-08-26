
class HttpWIS {

    /**
     * get 请请求
     * @param option 参数
    */
    async get(option={}){
        const response = await fetch(option.url,{method:'GET'});

        return await response.json();        
    }

    /**
     * post 请请求
     * @param option 参数
    */    
    async post(option={}){

        // 参数转 表单
        var formDataParams = new FormData();
        Object.entries((option.params||{})).map(o=>{
            formDataParams.append(o[0],o[1]);
        });


        const response = await fetch(option.url,{
            method: "POST",
            headers: {
                // 'Accept': '*/*',
                // 'Content-Type': 'application/json'
            },
            body:formDataParams
        });
        
        
        console.log( response );
        // 拿到的不是一个 json, 变成 jsoon 再return
        // return await response.json();
    }


}



// module.exports = {
//     httpGET: HttpWIS.get,    // get 请请求
//     b:3
// }


export default new HttpWIS;