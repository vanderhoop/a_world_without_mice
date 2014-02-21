$( document ).ready(function() {
  console.log("document: ready");

  Mousetrap.bind(['command+w', 'meta+s'], function(e) {
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        // internet explorer
        e.returnValue = false;
    }
    console.log("command + w overrided!");
    _saveDraft();
  });

  Mousetrap.bind(['command+t', 'meta+s'], function(e) {
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        // internet explorer
        e.returnValue = false;
    }
    console.log("command + t overrided!");
    _saveDraft();
  });

  Mousetrap.bind(['command+shift+[', 'meta+s'], function(e) {
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        // internet explorer
        e.returnValue = false;
    }
    console.log("command + shift + { overrided");
    _saveDraft();
  });

  Mousetrap.bind(['command+shift+]', 'meta+s'], function(e) {
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        // internet explorer
        e.returnValue = false;
    }
    console.log("command + shift + ] overrided");
    _saveDraft();
  });

  Mousetrap.bind(['command+~', 'meta+s'], function(e) {
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        // internet explorer
        e.returnValue = false;
    }
    console.log("command + ` overrided");
    _saveDraft();
  });

  Mousetrap.bind(['command+k', 'meta+s'], function(e) {
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        // internet explorer
        e.returnValue = false;
    }
    console.log("command+k overrided");
    _saveDraft();
  });

  Mousetrap.bind(['command+l', 'meta+s'], function(e) {
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        // internet explorer
        e.returnValue = false;
    }
    console.log("command+ l overrided");
    _saveDraft();
  });

  Mousetrap.bind(['command+192', 'meta+s'], function(e) {
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        // internet explorer
        e.returnValue = false;
    }
    console.log("COMBO!");
    _saveDraft();
  });
  Mousetrap.bind(['command+ f', 'meta+s'], function(e) {
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        // internet explorer
        e.returnValue = false;
    }
    console.log("command + f overrided");
    _saveDraft();
  });


  Mousetrap.bind(['t r a v i s'], function(e) {
    console.log("You just spelled your name")
     // functionality that will run when you type the word qwerty
  });

  Mousetrap.bind(['command+', 'meta+s'], function(e) {
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        // internet explorer
        e.returnValue = false;
    }
    console.log("COMBO!");
    _saveDraft();
  });






});
