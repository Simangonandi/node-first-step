describe('The greet function' , function(){
    it('should return "Hello, Nandi" when I greet Nandi' , function(){
        
        assert.equal('Hello, Nandi',greet('Nandi'));

    });

    it('should return "Hello, Simango" when I greet Simango' , function(){
        
        assert.equal('Hello, Simango',greet('Simango'));

    });

    it('should return "Hello" when no name is entered' , function(){
        
        assert.equal('Hello',greet());

    });

});