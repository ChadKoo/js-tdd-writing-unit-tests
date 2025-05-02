import {pointsForWord} from "../utils";

describe ("pointsForWord", () =>{
    it("calculates the total points for a word (2 for consanant, 1 for a vowel)", ()=>{
    const word = "test";
    const points = pointsForWord(word);
    expect(points).toBe(7)
        });

    it("handles uppercase and lowercase input", () => {
        const word = "tEsT";
      
        const points = pointsForWord(word);
      
        expect(points).toBe(7);
      });

    
    
})
