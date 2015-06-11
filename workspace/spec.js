describe("Math", function(){
    describe("#random()", function(){
        var result;
        beforeEach(function(){
            result = Math.random();
        });
        it("is less than 1", function(){
            expect(result).toBeLessThan(1.0);
        });
    });
    
    describe("#round", function(){
        var result;
        describe("input is 1.1", function(){
            beforeEach(function(){
                result = Math.round(1.1);
            });
            it("result is 1", function(){
                expect(result).toEqual(1);
            });
        });
    });
});