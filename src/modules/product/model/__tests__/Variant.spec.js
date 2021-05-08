import Variant from "./../Variant";

describe('Variant', () => {
    it('create Variant and check default props', () => {
        expect.assertions(3);
        const testvariant = new Variant("6GB DDR", 600);
        expect(testvariant.selected).toBe(false);
        expect(testvariant.name).toBe("6GB DDR");
        expect(testvariant.price).toBe(600);
    })
    it('select variant', () => {
        expect.assertions(1);
        const testvariant = new Variant("6GB DDR", 600);
        testvariant.selected = true;
        expect(testvariant.selected).toBe(true);
    })
});