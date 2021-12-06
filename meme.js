function make_the_beamz_memez(){
    const random = Math.floor(Math.random() * 200)

    const reg_string = "amanda77@lizardprotectiont0kensbest.org:L7imF1RQOkljA".split(':');
    
    var email = reg_string[0];
    var username = reg_string[0].split('@')[0]+`${random}`;
    var password = reg_string[1];
    Array.prototype.random = function () {
        return this[Math.floor((Math.random()*this.length))];
    }
    opt_in = ['y', 'n'].random()
    
    
    
    document.getElementById('email').value = email;
    
    setTimeout(function(){
        document.getElementsByClassName('js-continue-button signup-continue-button form-control px-3 width-full width-sm-auto mt-4 mt-sm-0')[0].click()
    },500);
    
    document.getElementById('password').value = password;
    
    setTimeout(function(){
        document.getElementsByClassName('js-continue-button signup-continue-button form-control px-3 width-full width-sm-auto mt-4 mt-sm-0')[1].click()
    },500);
    
    document.getElementById('login').value = username;
    
    setTimeout(function(){
        document.getElementsByClassName('js-continue-button signup-continue-button form-control px-3 width-full width-sm-auto mt-4 mt-sm-0')[2].click()
    },500);
    
    document.getElementById('opt_in').value = opt_in;
    
    setTimeout(function(){
        document.getElementsByClassName('js-continue-button signup-continue-button form-control px-3 width-full width-sm-auto mt-4 mt-sm-0')[3].click()
    },500);
}
