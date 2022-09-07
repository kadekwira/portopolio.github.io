
// let url = "https://en.wikipedia.org/w/api.php"; 


// let params={}
// $.getJSON("assets/skills.json",(result)=>{
//   const data=result
//   $(data).each(function(x,key){
//     params = {
//       action: "query",
//       list: "search",
//       srsearch: key.api,
//       format: "json"
//     };
//   })
// })


// url = url + "?origin=*";
// Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

// fetch(url)
//     .then(function(response){return response.json();})
//     .then(function(response) {
//         let respon = response.query.search;
//         respon.forEach((item,x)=>{
//           if(item.title === params.srsearch){
//             console.log(item)
//           }
          
//         })
//     })
//     .catch(function(error){console.log(error);});