class Animal {
    constructor(
        sinif,
        isim,
        yas,
        renk,
        ayakSayisi,
    ) {
        this.sinif = sinif;
        this.isim = isim;
        this.yas = yas;
        this.renk = renk;
        this.ayakSayisi = ayakSayisi;
    }
    
    getFullData() {
        console.log(this.sinif, this.isim, this.yas, this.renk, this.ayakSayisi);
    }
}

const animal = new Animal('Memeli', 'Karabaş', 3, 'gri', 4);
animal.getFullData();

class Dog extends Animal {
    constructor(sinif, isim, yas, renk, ayakSayisi, cins) {
        super(sinif, isim, yas, renk, ayakSayisi); 
        this.cins = cins;
        console.log(cins);
    }
}

class Cat extends Animal {
    constructor(sinif, isim, yas, renk, ayakSayisi, feature) {
        super(sinif, isim, yas, renk, ayakSayisi); 
        this.feature = feature;
    }
    
}

const dog = new Dog('Memeli', 'Karabaş', 3, 'gri', 4, 'golden');
console.log(dog.getFullData()); 