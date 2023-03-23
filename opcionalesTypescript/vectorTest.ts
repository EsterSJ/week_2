import { Vector } from "./vector";

let vector1, vector2: Vector;
vector1 = new Vector(5,100);
vector2 = new Vector(5,10);

vector1.print();
vector2.print();

vector1.add(vector2).print();
vector1.subs(vector2).print();
vector1.mult(vector2).print();
vector1.multNumber(2).print();