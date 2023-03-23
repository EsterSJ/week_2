class Vector {
    private elements: number[];

    constructor(n: number, k:number){
        this.elements = [];
        for (let i=0; i<n; i++){
            this.elements.push(Math.floor(Math.random()*k));
        }
    }

    public print(): void{
        console.log(this.elements);        
    }

    public add(v1: Vector): Vector{
        if (v1.elements.length == this.elements.length){
            for (let i=0; i < v1.elements.length; i++){
                v1.elements[i] += this.elements[i];
            }
        }
        return v1;
    }

    public subs(v1: Vector): Vector{
        if (v1.elements.length == this.elements.length){
            for (let i=0; i < v1.elements.length; i++){
                v1.elements[i] -= this.elements[i];
            }
        }
        return v1;
    }

    public mult(v1: Vector): Vector{
        if (v1.elements.length == this.elements.length){
            for (let i=0; i < v1.elements.length; i++){
                v1.elements[i] *= this.elements[i];
            }
        }
        return v1;
    }

    public multNumber(n: number): Vector{
        for (let i=0; i < this.elements.length; i++){
                this.elements[i] *= n;
        }
        return this;
    }
}

export {Vector}