setTimeout(()=>{
    var mainContainer = document.getElementsByClassName('Section1');
    console.log('mainContainer: ',mainContainer);
    var tables = mainContainer[0].getElementsByTagName('table');
    
    for (let index = 0; index < tables.length; index++) {
        const element = tables[index].classList.add('tabla-' + index);
        console.log('tables: ',element);
    }
    
    var lastParagraph = document.getElementsByTagName('span');
    var result = lastParagraph[lastParagraph.length-1].innerHTML.replace(/ /g,'-').replace(/_/g,'-').toLowerCase();
    var numberCharacter = result.charAt(0);
    
    
    if (numberCharacter <= '9' && numberCharacter >= '0') {
        numberCharacter = 'doc-';
    } else {
        numberCharacter = '';
    }
    
    for(var i = 0; i < mainContainer.length; i++) {
        mainContainer[i].className += numberCharacter + ' ' + result;
    }
},500)
