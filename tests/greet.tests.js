import assert from "assert";
import { greet } from "../greet.js";

describe('greet Test', function() {
    it("should return 'Hello, Stumza' when called with 'Stumza'", function() {
        assert.equal(greet('Stumza'), 'Hello, Stumza', "this should be true");
    });
    it("should return 'Hello, Tshepo' when called with 'Tshepo'", function() {
        assert.equal(greet('Tshepo'), 'Hello, Tshepo', "this should be true");
    });
    it("should return 'Hello, Thabo' when called with 'Thabo'", function() {
        assert.equal(greet('Thabo'), 'Hello, Thabo', "this should be true");
    });
});
