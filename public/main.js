"use strict";
// clases
class Movie {
    // private title: string;
    // duration: number;
    // readonly hasOscars: boolean
    constructor(title, duration, hasOscars) {
        this.title = title;
        this.duration = duration;
        this.hasOscars = hasOscars;
    }
    getInfo() {
        return `Title: ${this.title} - Duration: ${this.duration} - Has Oscars ${this.hasOscars}`;
    }
}
const movie1 = new Movie("El Señor de los Anillos", 300, true);
const movie2 = new Movie("Gigantes de Acero", 160, false);
console.log(movie1, movie2);
console.log(movie1.getInfo());
