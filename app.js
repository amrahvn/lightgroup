

function Change(){
    let inp_value=document.getElementById('group').value;
    
    let x =inp_value.slice(-3,-2);

    switch(x){
        case '1':
            document.getElementById('texts').innerHTML="Səhər qrupudur"
            document.body.style.backgroundColor="#F2EFE7"
            break;

        case '2':
            document.getElementById('texts').innerHTML="Günorta Qrupudur"
            document.body.style.backgroundColor="#ffa700"
            document.getElementById('texts').style.color="white"
            break;
            case '3':
                document.getElementById('texts').innerHTML="Axşam Qrupudur"
                document.body.style.backgroundColor="	#1e2b58"
                document.getElementById('texts').style.color="white"
            break;
            default:
            // alert('add valid opton')
            document.getElementById('texts').innerHTML="Add valid option"
            document.body.style.backgroundColor="red"
            break;

    }
}

function light(){
    if(document.body.style.backgroundColor==="white"){
        document.body.style.backgroundColor="black"
    }
    else{
        document.body.style.backgroundColor="white"
    }
}
