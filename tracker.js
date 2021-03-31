var firstTimeDisplay = function(){
      console.log('Tracker Says: User agent :'+navigator.userAgent);
      console.log('Tracker Says: Language :'+navigator.language);
      console.log('Tracker Says: Account ID : humainetest');
      console.log('Tracker Says: Session ID : session1');
    };
    var pageNavigate = function(pageName){
      console.log('Tracker Says : On '+pageName+' page');
    };
    var viewProduct = function(prodName){
      console.log('Tracker Says : View Product '+prodName);
    };
    var addCart = function(prodName){
      console.log('Tracker Says : Product Added to Cart '+prodName);
    };
    firstTimeDisplay();
