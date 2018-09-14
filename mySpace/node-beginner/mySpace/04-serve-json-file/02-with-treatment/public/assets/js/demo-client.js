
(function(window, document){
    var trigger = document.getElementById('trigger-fetch')
    var listen = function (trigger){
        if(!trigger)
        return false;
        trigger.addEventListener('click', function(e){
            alert('HELLO')
            var headers = new Headers()
            var options = {
                method:'GET',
                headers:headers,
                mode: 'cors',
                cache:'default'
            }
            fetch('/list.json', options)
            .then((response)=>{
                console.log(response)
                return response.json().then((json)=>{
                    var list ='';
                    json.forEach((member) => {
                        list += '<li>' + member.name + '<li>'
                    });
                    var output = document.getElementById('list-members')
                    output.innerHTML = list 
                    console.log(json)
                })
            })
        })
    }
    listen(trigger)
})(window,document)