
async function main(){
  sendMessage("100014748468935","","x");
}
let from = "100014748468935"
let to = "100040074844198"
document.querySelector("#send").onclick = function () { 
  main();
  chrome.tabs.executeScript({
    code: ` let token = document.querySelector('input[name="fb_dtsg"]').value;
            let url = "https://m.facebook.com/messages/send/?icm=1&surface_hierarchy=unknown&refid=12"
            async function sendMessage(){ 
            const data2Send = new URLSearchParams()
            data2Send.append("fb_dtsg","AQFqtJ7Uq64RYI8:31:1637208798")
            data2Send.append("tids","cid.c.${from}:${to}")
            data2Send.append("body",${message})
            const response = await fetch(url,{
              method : "POST",
              headers : {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              body : data2Send
              })
              return response
            }
          `
  });
}