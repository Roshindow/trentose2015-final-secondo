/* Remember that blanket will only work with brackets live preview */
/* Try to maximise the coverage of the FlirtrModel object */

describe("Flirtr", function() {

  it("Dovrebbe restituire 1", function () {
    var np = FlirtModel.getScore("love");
    expect(np).toBe(1);
  });  
  
  it("Dovrebbe restituire 0", function () {
    var np = FlirtModel.getScore("love friend");
    expect(np).toBe(0);
  }); 
  
  it("Dovrebbe restituire -1", function () {
    var np = FlirtModel.getScore("friend");
    expect(np).toBe(-1);
  }); 
 
});
